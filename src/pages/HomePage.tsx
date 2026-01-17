import { motion } from "framer-motion";
import { Flame, Clock, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CodeSnapCard from "@/components/CodeSnapCard";
import Navbar from "@/components/Navbar";
import StoriesBar from "@/components/StoriesBar";

const feedSnaps = [
  {
    username: "sarah_dev",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
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
    views: 1200,
    forks: 45,
    comments: 12,
    isLive: true,
  },
  {
    username: "alex_codes",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    code: `async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res.json();
    } catch (e) {
      if (i === retries - 1) throw e;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}`,
    language: "typescript",
    caption: "Exponential backoff retry pattern 🔄",
    tags: ["typescript", "async", "patterns"],
    expiresIn: "22h left",
    views: 3400,
    forks: 156,
    comments: 42,
    isLive: false,
  },
  {
    username: "rust_ninja",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rust",
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
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wizard",
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
    views: 2400,
    forks: 89,
    comments: 34,
  },
  {
    username: "css_wizard",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=css",
    code: `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}`,
    language: "css",
    caption: "Perfect glassmorphism effect ✨",
    tags: ["css", "glassmorphism", "ui"],
    expiresIn: "14h left",
    views: 5600,
    forks: 234,
    comments: 67,
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-24 md:pb-8">
        {/* Stories Bar */}
        <StoriesBar />

        {/* Feed */}
        <div className="max-w-xl mx-auto px-4 mt-6">
          {/* Feed Header */}
          <div className="flex items-center gap-4 mb-6 overflow-x-auto scrollbar-hide pb-2">
            <Badge variant="default" className="cursor-pointer flex-shrink-0 gap-1">
              <Sparkles className="h-3 w-3" />
              For You
            </Badge>
            <Badge variant="outline" className="cursor-pointer flex-shrink-0 gap-1 hover:bg-muted">
              <Flame className="h-3 w-3" />
              Trending
            </Badge>
            <Badge variant="outline" className="cursor-pointer flex-shrink-0 gap-1 hover:bg-muted">
              <Clock className="h-3 w-3" />
              Expiring Soon
            </Badge>
            <Badge variant="outline" className="cursor-pointer flex-shrink-0 hover:bg-muted">
              Following
            </Badge>
          </div>

          {/* Snaps */}
          <div className="space-y-6">
            {feedSnaps.map((snap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <CodeSnapCard {...snap} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
