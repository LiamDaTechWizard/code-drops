import { motion } from "framer-motion";
import { Search, TrendingUp, Flame, Clock, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CodeSnapCard from "@/components/CodeSnapCard";
import Navbar from "@/components/Navbar";

const feedSnaps = [
  {
    username: "alex_codes",
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
    username: "go_guru",
    code: `package main

func worker(jobs <-chan int, results chan<- int) {
    for j := range jobs {
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)
    
    for w := 1; w <= 3; w++ {
        go worker(jobs, results)
    }
}`,
    language: "go",
    caption: "Worker pool pattern in Go 🚀",
    tags: ["golang", "concurrency", "channels"],
    expiresIn: "19h left",
    views: 2100,
    forks: 89,
    comments: 23,
    isLive: true,
  },
  {
    username: "css_wizard",
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
  {
    username: "react_queen",
    code: `const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};`,
    language: "tsx",
    caption: "Generic debounce hook with TypeScript 💎",
    tags: ["react", "hooks", "typescript"],
    expiresIn: "8h left",
    views: 4200,
    forks: 178,
    comments: 45,
  },
  {
    username: "sql_master",
    code: `WITH ranked_sales AS (
  SELECT 
    product_id,
    SUM(amount) as total,
    ROW_NUMBER() OVER (
      PARTITION BY category 
      ORDER BY SUM(amount) DESC
    ) as rank
  FROM sales
  GROUP BY product_id, category
)
SELECT * FROM ranked_sales WHERE rank <= 5;`,
    language: "sql",
    caption: "Top 5 products per category using window functions",
    tags: ["sql", "analytics", "cte"],
    expiresIn: "4h left",
    views: 1800,
    forks: 67,
    comments: 19,
  },
  {
    username: "docker_dev",
    code: `FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM gcr.io/distroless/nodejs20
COPY --from=builder /app/node_modules ./node_modules
COPY . .
CMD ["index.js"]`,
    language: "dockerfile",
    caption: "Multi-stage Docker build for minimal images 🐳",
    tags: ["docker", "devops", "optimization"],
    expiresIn: "1h left",
    views: 980,
    forks: 45,
    comments: 12,
    isLive: false,
  },
];

const trendingTags = [
  { name: "typescript", count: "2.3k" },
  { name: "react", count: "1.8k" },
  { name: "rust", count: "1.2k" },
  { name: "algorithms", count: "890" },
  { name: "python", count: "756" },
  { name: "go", count: "543" },
];

const filters = [
  { icon: TrendingUp, label: "Trending" },
  { icon: Clock, label: "Recent" },
  { icon: Flame, label: "Expiring" },
];

const DiscoverPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-24 md:pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Search Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Discover <span className="gradient-text">Code</span>
            </h1>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search snaps, languages, tags..."
                className="pl-12 h-12 bg-card border-border focus:border-primary text-base"
              />
              <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">
                <Filter className="h-5 w-5" />
              </Button>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {filters.map((filter, index) => (
                <Button
                  key={filter.label}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="flex-shrink-0"
                >
                  <filter.icon className="h-4 w-4 mr-2" />
                  {filter.label}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-3 space-y-6">
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

            {/* Sidebar */}
            <aside className="hidden lg:block space-y-6">
              {/* Trending Tags */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  Trending Tags
                </h3>
                <div className="space-y-3">
                  {trendingTags.map((tag) => (
                    <div
                      key={tag.name}
                      className="flex items-center justify-between hover:bg-muted rounded-lg p-2 -mx-2 cursor-pointer transition-colors"
                    >
                      <span className="text-sm text-primary">#{tag.name}</span>
                      <span className="text-xs text-muted-foreground">{tag.count} snaps</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Daily Challenge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-4 rounded-2xl gradient-primary"
              >
                <Badge className="bg-white/20 text-white border-0 mb-3">
                  <Flame className="h-3 w-3 mr-1" />
                  Daily Challenge
                </Badge>
                <h3 className="font-semibold text-white mb-2">
                  Reverse a linked list
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  Can you do it in O(1) space?
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Accept Challenge
                </Button>
              </motion.div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DiscoverPage;
