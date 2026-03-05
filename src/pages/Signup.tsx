import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Mail, Lock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm space-y-8"
      >
        <div className="flex flex-col items-center gap-2">
          <Camera className="w-10 h-10 text-primary" />
          <h1 className="font-display text-2xl font-bold text-foreground">Create account</h1>
          <p className="text-muted-foreground text-sm">Join Photum and start booking</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Full name" className="pl-10" />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Email address" type="email" className="pl-10" />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Password" type="password" className="pl-10" />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Confirm password" type="password" className="pl-10" />
          </div>
          <Button className="w-full" size="lg">
            Create Account <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
