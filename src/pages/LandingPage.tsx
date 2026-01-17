import { motion } from "framer-motion";
import { Zap, Code, Users, Clock, ArrowRight, Sparkles, GitFork, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CodeSnapCard from "@/components/CodeSnapCard";

const sampleSnaps = [
  {
    username: "sarah_dev",
    code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x < pivot);
  const right = arr.slice(1).filter(x => x >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
    language: "javascript",
    caption: "Clean quicksort implementation ⚡",
    tags: ["algorithms", "sorting", "dsa"],
    expiresIn: "23h left",
    views: 1.2,
    forks: 45,
    comments: 12,
    isLive: true,
  },
  {
    username: "rust_ninja",
    code: `#[derive(Debug)]
struct User {
    name: String,
    email: String,
    active: bool,
}

impl User {
    fn new(name: &str, email: &str) -> Self {
        Self {
            name: name.to_string(),
            email: email.to_string(),
            active: true,
        }
    }
}`,
    language: "rust",
    caption: "Rust structs are so elegant 🦀",
    tags: ["rust", "structs", "beginners"],
    expiresIn: "18h left",
    views: 890,
    forks: 23,
    comments: 8,
  },
  {
    username: "py_wizard",
    code: `from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n: int) -> int:
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

# Calculate first 50 Fibonacci numbers
print([fib(i) for i in range(50)])`,
    language: "python",
    caption: "Memoization makes Fibonacci O(n) 🔥",
    tags: ["python", "memoization", "optimization"],
    expiresIn: "6h left",
    views: 2.4,
    forks: 89,
    comments: 34,
  },
];

const features = [
  {
    icon: Clock,
    title: "Ephemeral Snaps",
    description: "Share code that disappears in 24h. No pressure, just coding.",
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    icon: Users,
    title: "Live Collab",
    description: "Code together in real-time. See cursors, chat, and build.",
    gradient: "from-neon-green to-neon-blue",
  },
  {
    icon: GitFork,
    title: "Remix Culture",
    description: "Fork any snap, make it better, credit the original.",
    gradient: "from-neon-pink to-neon-orange",
  },
  {
    icon: Globe,
    title: "Discover Feed",
    description: "Trending code, challenges, and devs from around the world.",
    gradient: "from-neon-purple to-neon-pink",
  },
];

const stats = [
  { value: "50K+", label: "Active Devs" },
  { value: "1M+", label: "Snaps Shared" },
  { value: "500K", label: "Remixes" },
  { value: "24h", label: "Avg Snap Life" },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background noise-bg overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-grid-pattern bg-[size:40px_40px] opacity-20" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-muted/50 border border-border hover:bg-muted transition-colors">
              <Sparkles className="h-4 w-4 mr-2 text-neon-yellow" />
              The future of social coding is here
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Snapchat</span>
            <br />
            <span className="text-foreground">for </span>
            <span className="relative inline-block">
              <span className="text-foreground">Code</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-2 left-0 right-0 h-3 gradient-primary opacity-30 -z-10 origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Share code snippets that disappear. Remix, collab live, and build together — fast, visual, and temporary.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="gradient" size="xl" className="group">
              Start Snapping
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              <Code className="h-5 w-5 mr-2" />
              View Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Snaps Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-neon-green/10 text-neon-green border-neon-green/30">
              <Zap className="h-3 w-3 mr-1" />
              Live Feed
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Trending <span className="gradient-text">Snaps</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              See what developers are sharing right now. Fork it, remix it, make it yours.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleSnaps.map((snap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CodeSnapCard
                  {...snap}
                  views={typeof snap.views === "number" && snap.views > 1000 
                    ? snap.views 
                    : typeof snap.views === "number" 
                    ? snap.views * 1000 
                    : 1000}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built for <span className="gradient-text">Developers</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to share, learn, and collaborate on code.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-glow"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Snap</span>
              <Zap className="absolute -top-2 -right-6 h-8 w-8 text-neon-yellow animate-float" />
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of developers sharing, learning, and building together.
          </p>
          <Button variant="gradient" size="xl" className="group">
            Create Your First Snap
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold gradient-text">SNAPCODE</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Snapcode. Code fast. Share faster.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
