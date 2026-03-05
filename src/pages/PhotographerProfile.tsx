import PageShell from "@/components/PageShell";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Heart, Share2, ArrowLeft, Calendar, Camera } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const PhotographerProfile = () => {
  const { id } = useParams();

  return (
    <>
      <PageShell noPadding>
        {/* Cover */}
        <div className="relative h-64 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=400&fit=crop"
            alt="Photographer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute top-4 left-4 right-4 flex justify-between">
            <Button variant="glass" size="icon" asChild>
              <Link to="/explore"><ArrowLeft className="w-4 h-4" /></Link>
            </Button>
            <div className="flex gap-2">
              <Button variant="glass" size="icon"><Heart className="w-4 h-4" /></Button>
              <Button variant="glass" size="icon"><Share2 className="w-4 h-4" /></Button>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="px-5 -mt-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-2xl font-bold text-foreground">Sarah Mitchell</h1>
            <p className="text-primary font-medium text-sm mb-2">Wedding Photographer</p>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-6">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> New York</span>
              <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-primary fill-primary" /> 4.9 (127)</span>
              <span className="flex items-center gap-1"><Camera className="w-3.5 h-3.5" /> 350+ shoots</span>
            </div>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Capturing love stories through my lens for over 8 years. Specializing in candid, emotional moments that tell your unique story. Every photo is a memory preserved forever.
            </p>

            {/* Portfolio grid */}
            <h2 className="font-display font-semibold text-foreground mb-3">Portfolio</h2>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                "https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=200&fit=crop",
                "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=200&h=200&fit=crop",
                "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=200&h=200&fit=crop",
                "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=200&fit=crop",
                "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=200&h=200&fit=crop",
                "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=200&h=200&fit=crop",
              ].map((src, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden">
                  <img src={src} alt="Portfolio" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>

            {/* Reviews */}
            <h2 className="font-display font-semibold text-foreground mb-3">Reviews</h2>
            <div className="space-y-3 mb-8">
              {[
                { name: "Emma W.", text: "Sarah captured our wedding perfectly. Every moment, every tear of joy. Couldn't be happier!", rating: 5 },
                { name: "Mike T.", text: "Professional, creative, and so easy to work with. The photos exceeded our expectations.", rating: 5 },
              ].map((review, i) => (
                <div key={i} className="rounded-xl bg-secondary p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-sm text-foreground">{review.name}</span>
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} className="w-3 h-3 text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{review.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sticky booking bar */}
        <div className="sticky bottom-16 mx-5 mb-4">
          <div className="glass-strong rounded-xl p-4 flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-foreground">$250</span>
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
