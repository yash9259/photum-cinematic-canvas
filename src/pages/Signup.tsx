import heroCollage from "@/assets/hero-collage.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

type Role = "user" | "photographer";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<Role>("user");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroCollage} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-md" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md mx-5 my-8"
      >
        <div className="glass-strong rounded-3xl p-8 md:p-10 space-y-7">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Camera className="w-7 h-7 text-primary" />
            </div>
            <div className="text-center">
              <h1 className="font-display text-2xl font-bold text-foreground">Join Photum</h1>
              <p className="text-muted-foreground text-sm mt-1">Create your account and start {role === "user" ? "booking" : "shooting"}</p>
            </div>
          </div>

          {/* Role Toggle */}
          <div className="flex gap-2 p-1 bg-secondary rounded-2xl">
            {(["user", "photographer"] as Role[]).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  role === r
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {r === "user" ? "I need photos" : "I'm a photographer"}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="John Doe" className="pl-10 h-12" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="you@example.com" type="email" className="pl-10 h-12" />
              </div>
            </div>

            {role === "photographer" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Specialty</label>
                  <div className="relative">
                    <Camera className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="e.g. Wedding, Portrait, Fashion" className="pl-10 h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="e.g. New York, NY" className="pl-10 h-12" />
                  </div>
                </div>
              </motion.div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Min. 8 characters"
                  type={showPassword ? "text" : "password"}
                  className="pl-10 pr-10 h-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <Button className="w-full h-12 text-base" size="lg">
              {role === "user" ? "Create Account" : "Join as Photographer"} <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-center text-xs text-muted-foreground leading-relaxed">
            By signing up, you agree to our{" "}
            <span className="text-primary cursor-pointer hover:underline">Terms</span> and{" "}
            <span className="text-primary cursor-pointer hover:underline">Privacy Policy</span>
          </p>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
