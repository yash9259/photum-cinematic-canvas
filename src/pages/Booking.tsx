import PageShell from "@/components/PageShell";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, CreditCard, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const durations = [
  { label: "1 hr", price: 250 },
  { label: "2 hrs", price: 500 },
  { label: "4 hrs", price: 900 },
  { label: "Full day", price: 1600 },
];

const Booking = () => {
  const { id } = useParams();
  const [selectedDuration, setSelectedDuration] = useState(1);
  const selected = durations[selectedDuration];

  return (
    <>
      <PageShell>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <Button variant="ghost" size="icon" className="rounded-xl" asChild>
              <Link to={`/photographer/${id}`}><ArrowLeft className="w-4 h-4" /></Link>
            </Button>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">Book Session</h1>
              <p className="text-xs text-muted-foreground">Complete your booking details</p>
            </div>
          </div>
        </motion.div>

        {/* Photographer summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-4 flex items-center gap-4 mb-6"
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
            alt="Photographer"
            className="w-14 h-14 rounded-xl object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-semibold text-foreground">Sarah Mitchell</h3>
            <p className="text-xs text-primary font-medium">Wedding Photography</p>
          </div>
          <div className="text-right">
            <span className="font-display font-bold text-foreground text-lg">$250</span>
            <span className="text-xs text-muted-foreground block">/hour</span>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Date */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</label>
            <div className="relative">
              <CalendarIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input type="date" className="pl-10 h-12" />
            </div>
          </div>

          {/* Time */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Time</label>
            <div className="relative">
              <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input type="time" className="pl-10 h-12" />
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Duration</label>
            <div className="grid grid-cols-4 gap-2">
              {durations.map((d, i) => (
                <button
                  key={d.label}
                  onClick={() => setSelectedDuration(i)}
                  className={`py-3 rounded-xl text-center transition-all duration-200 ${
                    selectedDuration === i
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="text-sm font-semibold">{d.label}</div>
                  <div className="text-[10px] mt-0.5 opacity-70">${d.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Enter shoot location" className="pl-10 h-12" />
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Special Requests</label>
            <textarea
              placeholder="Any specific requirements or ideas..."
              rows={3}
              className="flex w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/30 transition-all duration-200 resize-none"
            />
          </div>

          {/* Summary */}
          <div className="bg-secondary rounded-2xl p-5 space-y-3">
            <h3 className="font-display font-semibold text-foreground text-sm mb-3">Booking Summary</h3>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{selected.label} session</span>
              <span className="text-foreground">${selected.price}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Service fee</span>
              <span className="text-foreground">${Math.round(selected.price * 0.05)}</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between items-center">
              <span className="font-semibold text-foreground">Total</span>
              <span className="font-display font-bold text-primary text-xl">
                ${selected.price + Math.round(selected.price * 0.05)}
              </span>
            </div>
          </div>

          {/* Book button */}
          <Button className="w-full h-13 text-base rounded-2xl" size="lg" style={{ height: 52 }}>
            <CreditCard className="w-4 h-4" /> Confirm & Pay
          </Button>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 pb-2">
            {["Secure Payment", "Free Cancellation", "Instant Confirm"].map((t) => (
              <div key={t} className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                <span className="text-[10px] text-muted-foreground">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </PageShell>
      <BottomNav />
    </>
  );
};

export default Booking;
