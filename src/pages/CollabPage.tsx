import { motion } from "framer-motion";
import { Users, Zap, Play, Clock, Code2, MessageCircle, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";

const liveSessions = [
  {
    id: 1,
    title: "Building a REST API from scratch",
    host: "alex_codes",
    hostAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    participants: 12,
    language: "typescript",
    viewers: 156,
    isLive: true,
  },
  {
    id: 2,
    title: "LeetCode Hard: Dynamic Programming",
    host: "dsa_master",
    hostAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dsa",
    participants: 8,
    language: "python",
    viewers: 234,
    isLive: true,
  },
  {
    id: 3,
    title: "Rust for Beginners - Ownership Deep Dive",
    host: "rust_ninja",
    hostAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rust",
    participants: 5,
    language: "rust",
    viewers: 89,
    isLive: true,
  },
];

const upcomingSessions = [
  {
    id: 4,
    title: "React Server Components Workshop",
    host: "react_queen",
    hostAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=react",
    scheduledFor: "Today, 6:00 PM",
    language: "typescript",
    interested: 45,
  },
  {
    id: 5,
    title: "System Design: Distributed Cache",
    host: "senior_dev",
    hostAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=senior",
    scheduledFor: "Tomorrow, 3:00 PM",
    language: "go",
    interested: 78,
  },
];

const CollabPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-24 md:pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Live <span className="gradient-text">Collab</span>
            </h1>
            <p className="text-muted-foreground">
              Code together in real-time. Join a session or start your own.
            </p>
          </motion.div>

          {/* Start Session CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 p-6 rounded-2xl gradient-primary relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Start a Live Session
                </h2>
                <p className="text-white/80">
                  Invite friends or open to the public. Code, chat, and build together.
                </p>
              </div>
              <Button variant="secondary" size="lg" className="gap-2">
                <Video className="h-5 w-5" />
                Go Live
              </Button>
            </div>
          </motion.div>

          {/* Live Now */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-neon-green text-black font-semibold animate-pulse">
                <Zap className="h-3 w-3 mr-1" />
                LIVE NOW
              </Badge>
              <span className="text-muted-foreground text-sm">
                {liveSessions.length} active sessions
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {liveSessions.map((session, index) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-2xl bg-card border border-border card-glow cursor-pointer group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-10 w-10 ring-2 ring-neon-green">
                        <AvatarImage src={session.hostAvatar} />
                        <AvatarFallback>{session.host.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{session.host}</p>
                        <Badge variant="secondary" className="text-xs font-mono uppercase">
                          {session.language}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-neon-green">
                      <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                      <span className="text-xs font-medium">{session.viewers}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold mb-3 line-clamp-2">{session.title}</h3>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {session.participants}
                      </span>
                    </div>
                    <Button size="sm" variant="neon-green" className="group-hover:glow-accent">
                      <Play className="h-4 w-4 mr-1" />
                      Join
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Upcoming */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Upcoming Sessions</h2>
            </div>

            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={session.hostAvatar} />
                      <AvatarFallback>{session.host.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{session.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{session.host}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {session.scheduledFor}
                        </span>
                        <Badge variant="secondary" className="text-xs font-mono uppercase">
                          {session.language}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {session.interested} interested
                    </span>
                    <Button variant="outline" size="sm">
                      Remind Me
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Features */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Real-time Editing</h3>
              <p className="text-sm text-muted-foreground">
                See cursors, edits, and changes as they happen. No lag.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Built-in Chat</h3>
              <p className="text-sm text-muted-foreground">
                Discuss code, share links, and react with emojis.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Host Controls</h3>
              <p className="text-sm text-muted-foreground">
                Kick, invite, and set read-only mode. You're in charge.
              </p>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default CollabPage;
