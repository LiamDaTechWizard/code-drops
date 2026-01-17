import { motion } from "framer-motion";
import {
  Settings,
  Share2,
  Code2,
  GitFork,
  Eye,
  Users,
  Award,
  Calendar,
  MapPin,
  Link as LinkIcon,
  Zap,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeSnapCard from "@/components/CodeSnapCard";
import Navbar from "@/components/Navbar";

const userSnaps = [
  {
    username: "johndoe",
    code: `const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue] as const;
};`,
    language: "typescript",
    caption: "Custom useLocalStorage hook with TypeScript 🔥",
    tags: ["react", "hooks", "typescript"],
    expiresIn: "20h left",
    views: 1250,
    forks: 67,
    comments: 23,
  },
  {
    username: "johndoe",
    code: `def binary_search(arr: list, target: int) -> int:
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
    language: "python",
    caption: "Clean binary search implementation",
    tags: ["python", "algorithms", "dsa"],
    expiresIn: "12h left",
    views: 890,
    forks: 34,
    comments: 12,
  },
];

const techStack = [
  { name: "TypeScript", color: "bg-neon-blue" },
  { name: "React", color: "bg-neon-green" },
  { name: "Python", color: "bg-neon-yellow" },
  { name: "Rust", color: "bg-neon-orange" },
  { name: "Go", color: "bg-neon-purple" },
];

const achievements = [
  { icon: "🔥", name: "7 Day Streak", description: "Snapped for 7 days straight" },
  { icon: "⚡", name: "Speed Coder", description: "Won a speed challenge" },
  { icon: "🎯", name: "100 Remixes", description: "Code remixed 100 times" },
  { icon: "👥", name: "Collaborator", description: "Joined 50+ live sessions" },
];

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16 pb-24 md:pb-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          {/* Banner */}
          <div className="h-32 md:h-48 gradient-primary opacity-50" />

          {/* Profile Info */}
          <div className="max-w-4xl mx-auto px-4 -mt-16 md:-mt-20 relative z-10">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
              {/* Avatar */}
              <Avatar className="h-28 w-28 md:h-36 md:w-36 ring-4 ring-background border-4 border-primary">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=johndoe" />
                <AvatarFallback className="text-2xl bg-muted">JD</AvatarFallback>
              </Avatar>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold">John Doe</h1>
                  <Badge variant="secondary" className="w-fit">
                    <Zap className="h-3 w-3 mr-1" />
                    Pro Developer
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-3">@johndoe</p>
                <p className="text-foreground mb-4 max-w-xl">
                  Full-stack developer passionate about clean code and open source. 
                  Building things that matter. ⚡
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </span>
                  <span className="flex items-center gap-1">
                    <LinkIcon className="h-4 w-4" />
                    <a href="#" className="text-primary hover:underline">github.com/johndoe</a>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined March 2024
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 w-full md:w-auto">
                <Button variant="gradient" className="flex-1 md:flex-none">
                  Follow
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-4 gap-4 mt-8 p-4 rounded-2xl bg-card border border-border"
            >
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">256</p>
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <Code2 className="h-3 w-3" />
                  Snaps
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">1.2K</p>
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <Users className="h-3 w-3" />
                  Followers
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">3.4K</p>
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <GitFork className="h-3 w-3" />
                  Remixes
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">45K</p>
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <Eye className="h-3 w-3" />
                  Views
                </p>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">TECH STACK</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge
                    key={tech.name}
                    variant="secondary"
                    className="px-3 py-1"
                  >
                    <span className={`w-2 h-2 rounded-full ${tech.color} mr-2`} />
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                <Award className="h-4 w-4" />
                ACHIEVEMENTS
              </h3>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.name}
                    className="flex-shrink-0 p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <span className="text-2xl mb-2 block">{achievement.icon}</span>
                    <p className="text-sm font-semibold">{achievement.name}</p>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Tabs */}
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <Tabs defaultValue="snaps" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-auto p-0 mb-6">
              <TabsTrigger
                value="snaps"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Snaps
              </TabsTrigger>
              <TabsTrigger
                value="remixes"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Remixes
              </TabsTrigger>
              <TabsTrigger
                value="saved"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Saved
              </TabsTrigger>
            </TabsList>

            <TabsContent value="snaps" className="space-y-6">
              {userSnaps.map((snap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CodeSnapCard {...snap} />
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="remixes">
              <div className="text-center py-12 text-muted-foreground">
                <GitFork className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No remixes yet</p>
              </div>
            </TabsContent>

            <TabsContent value="saved">
              <div className="text-center py-12 text-muted-foreground">
                <Code2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No saved snaps</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
