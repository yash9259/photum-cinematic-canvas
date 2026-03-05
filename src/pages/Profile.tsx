import PageShell from "@/components/PageShell";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Settings, Heart, Calendar, Star, ChevronRight, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuItems = [
  { icon: Calendar, label: "My Bookings", to: "/bookings" },
  { icon: Heart, label: "Saved Photographers", to: "/saved" },
  { icon: Star, label: "My Reviews", to: "/reviews" },
  { icon: Settings, label: "Settings", to: "/settings" },
];

const Profile = () => {
  return (
    <>
      <PageShell>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl font-bold text-foreground mb-6">Profile</h1>
        </motion.div>

        {/* User card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-5 flex items-center gap-4 mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-xl shrink-0">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-display font-semibold text-foreground text-lg">John Doe</h2>
            <p className="text-sm text-muted-foreground truncate">john.doe@email.com</p>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-3 gap-3 mb-8"
        >
          {[
            { label: "Bookings", value: "12" },
            { label: "Reviews", value: "8" },
            { label: "Saved", value: "24" },
          ].map((stat) => (
            <div key={stat.label} className="bg-secondary rounded-xl p-4 text-center">
              <div className="font-display font-bold text-xl text-foreground">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Menu */}
        <div className="space-y-1 mb-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              <Link
                to={item.to}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
              >
                <item.icon className="w-5 h-5 text-muted-foreground" />
                <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </Link>
            </motion.div>
          ))}
        </div>

        <Button variant="outline" className="w-full text-destructive border-destructive/20 hover:bg-destructive/10">
          <LogOut className="w-4 h-4" /> Sign Out
        </Button>
      </PageShell>
      <BottomNav />
    </>
  );
};

export default Profile;
