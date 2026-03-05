import PageShell from "@/components/PageShell";
import BottomNav from "@/components/BottomNav";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const conversations = [
  { id: "1", name: "Sarah Mitchell", message: "Looking forward to our shoot!", time: "2m ago", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop", unread: true },
  { id: "2", name: "James Chen", message: "The photos are ready for you!", time: "1h ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop", unread: true },
  { id: "3", name: "Emily Rose", message: "Can we reschedule to Friday?", time: "3h ago", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop", unread: false },
  { id: "4", name: "Alex Rivera", message: "Thanks for the great review!", time: "1d ago", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop", unread: false },
];

const Messages = () => {
  return (
    <>
      <PageShell>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h1 className="font-display text-2xl font-bold text-foreground mb-1">Messages</h1>
          <p className="text-sm text-muted-foreground">Your conversations</p>
        </motion.div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search messages..." className="pl-10" />
        </div>

        <div className="space-y-1">
          {conversations.map((conv, i) => (
            <motion.button
              key={conv.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors text-left"
            >
              <div className="relative shrink-0">
                <img src={conv.avatar} alt={conv.name} className="w-12 h-12 rounded-full object-cover" />
                {conv.unread && (
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <span className="font-medium text-sm text-foreground">{conv.name}</span>
                  <span className="text-[10px] text-muted-foreground shrink-0">{conv.time}</span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{conv.message}</p>
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
