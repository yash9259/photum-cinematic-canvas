import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Camera, Compass, MessageCircle, User } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", icon: Camera, label: "Home" },
  { to: "/explore", icon: Compass, label: "Explore" },
  { to: "/messages", icon: MessageCircle, label: "Messages" },
  { to: "/profile", icon: User, label: "Profile" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map(({ to, icon: Icon, label }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                "relative flex flex-col items-center gap-0.5 py-2 px-4 rounded-xl transition-all duration-200",
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className={cn("w-5 h-5", active && "drop-shadow-[0_0_8px_hsl(45,100%,65%,0.5)]")} />
              <span className={cn("text-[10px]", active ? "font-semibold" : "font-medium")}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
