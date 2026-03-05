import PageShell from "@/components/PageShell";
import BottomNav from "@/components/BottomNav";
import PhotographerCard from "@/components/PhotographerCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Wedding", "Portrait", "Fashion", "Event", "Nature", "Street", "Product"];

const photographers = [
  { id: "1", name: "Sarah Mitchell", specialty: "Wedding", location: "New York", rating: 4.9, price: "$250/hr", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop" },
  { id: "2", name: "James Chen", specialty: "Portrait", location: "Los Angeles", rating: 4.8, price: "$200/hr", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" },
  { id: "3", name: "Emily Rose", specialty: "Fashion", location: "Miami", rating: 4.7, price: "$300/hr", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop" },
  { id: "4", name: "Alex Rivera", specialty: "Event", location: "Chicago", rating: 4.9, price: "$180/hr", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop" },
  { id: "5", name: "Lisa Park", specialty: "Nature", location: "Seattle", rating: 4.6, price: "$150/hr", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop" },
  { id: "6", name: "David Kim", specialty: "Street", location: "San Francisco", rating: 4.8, price: "$220/hr", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop" },
];

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      <PageShell>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="font-display text-3xl font-bold text-foreground mb-1">Explore</h1>
          <p className="text-sm text-muted-foreground">Find the perfect photographer for you</p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="flex gap-2 mb-6"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search photographers, styles..." className="pl-10 h-12" />
          </div>
          <Button variant="outline" size="icon" className="h-12 w-12 shrink-0">
            <SlidersHorizontal className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex gap-2 overflow-x-auto pb-4 mb-6 -mx-5 px-5 scrollbar-hide"
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(i)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === i
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass rounded-2xl p-4 mb-6 flex items-center gap-4"
        >
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-semibold text-foreground text-sm">Trending This Week</h3>
            <p className="text-xs text-muted-foreground truncate">Wedding & portrait photographers are in high demand</p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {photographers.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06 }}
            >
              <PhotographerCard {...p} />
            </motion.div>
          ))}
        </div>
      </PageShell>
      <BottomNav />
    </>
  );
};

export default Explore;
