import PageShell from "@/components/PageShell";
import BottomNav from "@/components/BottomNav";
import { Input } from "@/components/ui/input";
import { Search, MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const conversations = [
  { id: "1", name: "Sarah Mitchell", message: "Looking forward to our shoot! See you Saturday 🎉", time: "2m", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop", unread: 2 },
  { id: "2", name: "James Chen", message: "The photos are ready for download!", time: "1h", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop", unread: 1 },
  { id: "3", name: "Emily Rose", message: "Can we reschedule to Friday?", time: "3h", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop", unread: 0 },
  { id: "4", name: "Alex Rivera", message: "Thanks for the great review! Really appreciate it.", time: "1d", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop", unread: 0 },
  { id: "5", name: "Lisa Park", message: "I'll send the edited photos tonight", time: "2d", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop", unread: 0 },
];

const Messages = () => {
  return (
    <>
      <PageShell>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-1">Messages</h1>
            <p className="text-sm text-muted-foreground">Your conversations</p>
          </div>
          <Button variant="outline" size="icon" className="rounded-xl">
            <MessageSquarePlus className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Search */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="relative mb-6">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search messages..." className="pl-10 h-12" />
        </motion.div>

        {/* Conversation list */}
        <div className="space-y-1">
          {conversations.map((conv, i) => (
            <motion.button
              key={conv.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="w-full flex items-center gap-3.5 p-3.5 rounded-2xl hover:bg-secondary transition-colors text-left group"
            >
              <div className="relative shrink-0">
                <img src={conv.avatar} alt={conv.name} className="w-13 h-13 rounded-full object-cover" style={{ width: 52, height: 52 }} />
                {conv.unread > 0 && (
                  <div className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center border-2 border-background">
                    <span className="text-[9px] font-bold text-primary-foreground">{conv.unread}</span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className={`font-semibold text-sm ${conv.unread > 0 ? "text-foreground" : "text-foreground/80"}`}>
                    {conv.name}
                  </span>
                  <span className="text-[11px] text-muted-foreground shrink-0 ml-2">{conv.time}</span>
                </div>
                <p className={`text-xs truncate ${conv.unread > 0 ? "text-foreground/70 font-medium" : "text-muted-foreground"}`}>
                  {conv.message}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </PageShell>
      <BottomNav />
    </>
  );
};

export default Messages;
