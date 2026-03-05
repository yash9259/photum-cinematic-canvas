import PageShell from "@/components/PageShell";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Settings, Heart, Calendar, Star, ChevronRight, LogOut, Bell, HelpCircle, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuSections = [
  {
    title: "Activity",
    items: [
      { icon: Calendar, label: "My Bookings", to: "/bookings", badge: "3" },
      { icon: Heart, label: "Saved Photographers", to: "/saved" },
      { icon: Star, label: "My Reviews", to: "/reviews" },
    ],
  },
  {
    title: "Settings",
    items: [
      { icon: Bell, label: "Notifications", to: "/notifications" },
      { icon: Settings, label: "Account Settings", to: "/settings" },
      { icon: HelpCircle, label: "Help & Support", to: "/support" },
    ],
  },
];

const Profile = () => {
  return (
    <>
      <PageShell>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold text-foreground mb-6">Profile</h1>
        </motion.div>

        {/* User card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-5 mb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-18 h-18 rounded-2xl bg-primary/15 flex items-center justify-center text-primary font-display font-bold text-2xl shrink-0" style={{ width: 72, height: 72 }}>
              JD
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-display font-bold text-foreground text-xl">John Doe</h2>
              <p className="text-sm text-muted-foreground truncate">john.doe@email.com</p>
              <div className="flex items-center gap-1 mt-1">
                <Camera className="w-3 h-3 text-primary" />
                <span className="text-xs text-primary font-medium">Premium Member</span>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full">
            Edit Profile
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
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="bg-secondary rounded-2xl p-4 text-center"
            >
              <div className="font-display font-bold text-2xl text-foreground">{stat.value}</div>
              <div className="text-[11px] text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Menu sections */}
        {menuSections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + si * 0.08 }}
            className="mb-6"
          >
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 px-1">{section.title}</h3>
            <div className="bg-secondary rounded-2xl overflow-hidden">
              {section.items.map((item, i) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center gap-3 px-4 py-3.5 hover:bg-muted/50 transition-colors ${
                    i < section.items.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
                  {"badge" in item && item.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button variant="outline" className="w-full text-destructive border-destructive/20 hover:bg-destructive/10 rounded-2xl h-12">
            <LogOut className="w-4 h-4" /> Sign Out
          </Button>
        </motion.div>
      </PageShell>
      <BottomNav />
    </>
  );
};

export default Profile;
