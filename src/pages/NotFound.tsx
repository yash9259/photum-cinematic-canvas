import { Button } from "@/components/ui/button";
import { Camera, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-sm"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Camera className="w-8 h-8 text-primary" />
        </div>
        <h1 className="font-display text-6xl font-extrabold text-foreground mb-2">404</h1>
        <p className="text-muted-foreground mb-8">This page doesn't exist or has been moved.</p>
        <Button asChild size="lg" className="rounded-2xl">
          <Link to="/">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
