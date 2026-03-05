import PageShell from "@/components/PageShell";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, CreditCard } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Booking = () => {
  const { id } = useParams();

  return (
    <>
      <PageShell>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to={`/photographer/${id}`}><ArrowLeft className="w-4 h-4" /></Link>
            </Button>
            <h1 className="font-display text-2xl font-bold text-foreground">Book Session</h1>
          </div>
        </motion.div>

        {/* Photographer summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-4 flex items-center gap-3 mb-6"
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
            alt="Photographer"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-foreground text-sm">Sarah Mitchell</h3>
            <p className="text-xs text-primary">Wedding Photography</p>
          </div>
          <div className="ml-auto text-right">
            <span className="font-bold text-foreground">$250</span>
            <span className="text-xs text-muted-foreground"> /hr</span>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-5"
        >
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Date</label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input type="date" className="pl-10" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input type="time" className="pl-10" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Duration</label>
            <div className="grid grid-cols-3 gap-2">
              {["1 hour", "2 hours", "4 hours"].map((d, i) => (
                <Button key={d} variant={i === 1 ? "default" : "outline"} size="sm" className="w-full">
                  {d}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Enter shoot location" className="pl-10" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Special Requests</label>
            <textarea
              placeholder="Any specific requirements..."
              className="flex min-h-[80px] w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/30 transition-all duration-200 resize-none"
            />
          </div>

          {/* Summary */}
          <div className="bg-secondary rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">2 hours × $250/hr</span>
              <span className="text-foreground">$500</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Service fee</span>
              <span className="text-foreground">$25</span>
            </div>
            <div className="border-t border-border pt-2 flex justify-between">
              <span className="font-semibold text-foreground">Total</span>
              <span className="font-bold text-primary text-lg">$525</span>
            </div>
          </div>

          <Button className="w-full" size="lg">
            <CreditCard className="w-4 h-4" /> Confirm Booking
          </Button>
        </motion.div>
      </PageShell>
      <BottomNav />
    </>
  );
};

export default Booking;
