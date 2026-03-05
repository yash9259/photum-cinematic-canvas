import heroCollage from "@/assets/hero-collage.jpg";
import { Button } from "@/components/ui/button";
import { Camera, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroCollage}
          alt="Photography collage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <Camera className="w-8 h-8 text-primary" />
          <span className="font-display text-2xl font-bold text-foreground">Photum</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4"
        >
          Find Your Perfect{" "}
          <span className="text-gradient">Photographer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg mb-8 max-w-sm"
        >
          Book talented photographers for any occasion. Stunning results, every time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-xs"
        >
          <Button asChild size="lg" className="flex-1">
            <Link to="/explore">
              Explore <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="glass" size="lg" className="flex-1">
            <Link to="/login">Sign In</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
