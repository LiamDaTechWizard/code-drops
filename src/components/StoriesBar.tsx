import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const stories = [
  { username: "You", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=you", isYou: true, hasStory: false },
  { username: "sarah_dev", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah", hasStory: true, isLive: true },
  { username: "alex_codes", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex", hasStory: true },
  { username: "rust_ninja", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rust", hasStory: true },
  { username: "py_wizard", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wizard", hasStory: true },
  { username: "go_guru", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=go", hasStory: true },
  { username: "react_queen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=react", hasStory: true },
  { username: "docker_dev", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=docker", hasStory: true },
];

const StoriesBar = () => {
  return (
    <div className="border-b border-border bg-card/50">
      <div className="max-w-xl mx-auto px-4 py-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {stories.map((story, index) => (
            <motion.button
              key={story.username}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-1 flex-shrink-0"
            >
              <div className={`relative p-0.5 rounded-full ${story.hasStory ? 'gradient-primary' : ''}`}>
                <Avatar className={`h-16 w-16 border-2 border-background ${story.isLive ? 'ring-2 ring-neon-green ring-offset-2 ring-offset-background' : ''}`}>
                  <AvatarImage src={story.avatar} />
                  <AvatarFallback className="bg-muted">
                    {story.username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {story.isYou && (
                  <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full gradient-primary flex items-center justify-center border-2 border-background">
                    <Plus className="h-3 w-3 text-white" />
                  </div>
                )}
                {story.isLive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-neon-green text-[10px] font-bold text-black">
                    LIVE
                  </div>
                )}
              </div>
              <span className="text-xs text-muted-foreground max-w-[64px] truncate">
                {story.isYou ? 'Your Story' : story.username}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoriesBar;
