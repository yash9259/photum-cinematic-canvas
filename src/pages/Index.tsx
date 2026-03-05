import heroCollage from "@/assets/hero-collage.jpg";
import { Button } from "@/components/ui/button";
import { Camera, ArrowRight, Sparkles, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  { icon: Sparkles, title: "Top Talent", desc: "Verified professionals" },
  { icon: Users, title: "500+ Artists", desc: "Every style & genre" },
  { icon: Shield, title: "Secure", desc: "Protected bookings" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroCollage} alt="Photography collage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Top bar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 pt-6 pb-4"
      >
        <div className="flex items-center gap-2">
          <Camera className="w-7 h-7 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">Photum</span>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/login" className="text-muted-foreground">Sign In</Link>
        </Button>
      </motion.header>

      {/* Hero */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium text-primary">The #1 Photography Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] mb-5 tracking-tight"
        >
          Find Your
          <br />
          <span className="text-gradient">Perfect Shot</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg mb-8 max-w-md leading-relaxed"
        >
          Connect with world-class photographers. Book sessions, preview portfolios, and create unforgettable memories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mb-12"
        >
          <Button asChild size="lg" className="flex-1 text-base">
            <Link to="/explore">
              Explore Now <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="glass" size="lg" className="flex-1 text-base">
            <Link to="/signup">Get Started</Link>
          </Button>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="glass rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <f.icon className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">{f.title}</div>
                <div className="text-[11px] text-muted-foreground">{f.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="relative z-10 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default Index;
