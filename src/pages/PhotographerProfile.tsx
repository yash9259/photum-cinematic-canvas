import PageShell from "@/components/PageShell";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Heart, Share2, ArrowLeft, Calendar, Camera, Clock, Award } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Portfolio", "Reviews", "About"];

const PhotographerProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <>
      <PageShell noPadding>
        {/* Cover */}
        <div className="relative h-72 md:h-80 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=400&fit=crop"
            alt="Photographer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

          {/* Nav overlay */}
          <div className="absolute top-4 left-4 right-4 flex justify-between">
            <Button variant="glass" size="icon" asChild>
              <Link to="/explore"><ArrowLeft className="w-4 h-4" /></Link>
            </Button>
            <div className="flex gap-2">
              <Button
                variant="glass"
                size="icon"
                onClick={() => setLiked(!liked)}
                className={liked ? "text-red-400" : ""}
              >
                <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
              </Button>
              <Button variant="glass" size="icon"><Share2 className="w-4 h-4" /></Button>
            </div>
          </div>

          {/* Name overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-3xl font-bold text-foreground">Sarah Mitchell</h1>
              <p className="text-primary font-semibold text-sm mt-0.5">Wedding Photographer</p>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <div className="px-5 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-4 gap-2 mb-6"
          >
            {[
              { icon: Star, label: "Rating", value: "4.9" },
              { icon: Camera, label: "Shoots", value: "350+" },
              { icon: Clock, label: "Exp", value: "8 yrs" },
              { icon: Award, label: "Awards", value: "12" },
            ].map((stat) => (
              <div key={stat.label} className="bg-secondary rounded-xl p-3 text-center">
                <stat.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                <div className="font-display font-bold text-sm text-foreground">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>New York, USA</span>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-secondary rounded-xl mb-6">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {activeTab === 0 && (
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                  "https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=200&fit=crop",
                  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=200&h=200&fit=crop",
                  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=200&h=200&fit=crop",
                  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=200&fit=crop",
                  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=200&h=200&fit=crop",
                  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=200&h=200&fit=crop",
                  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=200&h=200&fit=crop",
                  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=200&h=200&fit=crop",
                  "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=200&h=200&fit=crop",
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <img src={src} alt="Portfolio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 1 && (
              <div className="space-y-3 mb-6">
                {[
                  { name: "Emma W.", text: "Sarah captured our wedding perfectly. Every moment, every tear of joy. The photos exceeded all expectations!", rating: 5, date: "2 weeks ago" },
                  { name: "Mike T.", text: "Professional, creative, and so easy to work with. Highly recommended for any event.", rating: 5, date: "1 month ago" },
                  { name: "Olivia R.", text: "The engagement shoot was magical. Sarah has an eye for finding the perfect light and angles.", rating: 5, date: "2 months ago" },
                ].map((review, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl bg-secondary p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                          {review.name[0]}
                        </div>
                        <span className="font-medium text-sm text-foreground">{review.name}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex mb-2">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} className="w-3 h-3 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{review.text}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <div className="space-y-4 mb-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Capturing love stories through my lens for over 8 years. Specializing in candid, emotional moments that tell your unique story. Every photo is a memory preserved forever.
                </p>
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-foreground text-sm">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Weddings", "Engagements", "Portraits", "Events", "Editorial"].map((s) => (
                      <span key={s} className="px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-foreground text-sm">Equipment</h3>
                  <p className="text-xs text-muted-foreground">Canon EOS R5, Sony A7 IV, Various L-series lenses, Professional lighting setup</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Sticky booking bar */}
        <div className="sticky bottom-16 mx-5 mb-4">
          <div className="glass-strong rounded-2xl p-4 flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-foreground">$250</span>
              <span className="text-muted-foreground text-sm"> / hour</span>
            </div>
            <Button size="lg" asChild>
              <Link to={`/booking/${id || "1"}`}>
                <Calendar className="w-4 h-4" /> Book Now
              </Link>
            </Button>
          </div>
        </div>
      </PageShell>
      <BottomNav />
    </>
  );
};

export default PhotographerProfile;
