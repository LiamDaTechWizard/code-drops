import { motion } from "framer-motion";
import { Clock, GitFork, Eye, MessageCircle, Zap } from "lucide-react";
import CodeBlock from "./CodeBlock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CodeSnapCardProps {
  username: string;
  avatar?: string;
  code: string;
  language: string;
  caption?: string;
  tags?: string[];
  expiresIn: string;
  views: number;
  forks: number;
  comments: number;
  isLive?: boolean;
  className?: string;
}

const CodeSnapCard = ({
  username,
  avatar,
  code,
  language,
  caption,
  tags = [],
  expiresIn,
  views,
  forks,
  comments,
  isLive = false,
  className,
}: CodeSnapCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-card border border-border card-glow cursor-pointer group",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 ring-2 ring-primary/30">
            <AvatarImage src={avatar} />
            <AvatarFallback className="bg-muted text-sm font-semibold">
              {username.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{username}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{expiresIn}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="font-mono text-xs uppercase">
            {language}
          </Badge>
          {isLive && (
            <Badge className="bg-neon-green text-black font-semibold animate-pulse">
              <Zap className="h-3 w-3 mr-1" />
              LIVE
            </Badge>
          )}
        </div>
      </div>

      {/* Code */}
      <div className="gradient-code max-h-64 overflow-hidden">
        <CodeBlock code={code} language={language} showLineNumbers={false} />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none" />
      </div>

      {/* Caption & Tags */}
      {(caption || tags.length > 0) && (
        <div className="p-4 border-t border-border/50">
          {caption && (
            <p className="text-sm text-foreground mb-2">{caption}</p>
          )}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-primary hover:text-primary/80 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-t border-border/50">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <Eye className="h-4 w-4" />
            <span className="text-xs font-medium">{views}</span>
          </button>
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-neon-green transition-colors">
            <GitFork className="h-4 w-4" />
            <span className="text-xs font-medium">{forks}</span>
          </button>
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-neon-pink transition-colors">
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs font-medium">{comments}</span>
          </button>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1.5 rounded-full text-xs font-semibold gradient-primary text-white"
        >
          Remix
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CodeSnapCard;
