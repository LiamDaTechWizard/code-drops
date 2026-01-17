import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Image,
  Hash,
  Clock,
  Lock,
  Users,
  Globe,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CodeBlock from "@/components/CodeBlock";
import Navbar from "@/components/Navbar";

const languages = [
  "javascript",
  "typescript",
  "python",
  "rust",
  "go",
  "java",
  "cpp",
  "sql",
  "css",
  "html",
];

const expirationOptions = [
  { value: "1h", label: "1 hour" },
  { value: "24h", label: "24 hours" },
  { value: "7d", label: "7 days" },
];

const privacyOptions = [
  { value: "public", label: "Public", icon: Globe },
  { value: "friends", label: "Friends Only", icon: Users },
  { value: "private", label: "Invite Only", icon: Lock },
];

const CreateSnapPage = () => {
  const [code, setCode] = useState(`// Start typing your code here...
function hello() {
  console.log("Hello, SNAPCODE! 🚀");
}`);
  const [language, setLanguage] = useState("javascript");
  const [caption, setCaption] = useState("");
  const [tags, setTags] = useState<string[]>(["javascript"]);
  const [tagInput, setTagInput] = useState("");
  const [expiration, setExpiration] = useState("24h");
  const [privacy, setPrivacy] = useState("public");

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim().toLowerCase())) {
      setTags([...tags, tagInput.trim().toLowerCase()]);
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-24 md:pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Create <span className="gradient-text">Snap</span>
            </h1>
            <p className="text-muted-foreground">
              Share your code with the world. It'll disappear in {expiration}.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Editor */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {/* Language Selector */}
              <div className="flex items-center gap-3">
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-40 bg-card border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {languages.map((lang) => (
                      <SelectItem key={lang} value={lang} className="capitalize">
                        {lang}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="h-3 w-3" />
                  Auto-detect
                </Badge>
              </div>

              {/* Code Editor */}
              <div className="relative rounded-2xl bg-card border border-border overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-neon-yellow/70" />
                  <div className="w-3 h-3 rounded-full bg-neon-green/70" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">
                    snap.{language}
                  </span>
                </div>
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="min-h-[300px] font-mono text-sm bg-transparent border-0 rounded-none focus-visible:ring-0 resize-none p-4"
                  placeholder="Paste or type your code here..."
                />
              </div>

              {/* Caption */}
              <div>
                <Input
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Add a caption... ✨"
                  className="bg-card border-border"
                  maxLength={140}
                />
                <p className="text-xs text-muted-foreground mt-1 text-right">
                  {caption.length}/140
                </p>
              </div>

              {/* Tags */}
              <div>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addTag()}
                    placeholder="Add tags..."
                    className="bg-card border-border"
                  />
                  <Button variant="outline" onClick={addTag}>
                    <Hash className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive/20"
                      onClick={() => removeTag(tag)}
                    >
                      #{tag} ×
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Preview & Settings */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {/* Preview */}
              <div className="rounded-2xl bg-card border border-border overflow-hidden">
                <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center justify-between">
                  <span className="text-sm font-medium">Preview</span>
                  <Badge variant="outline" className="font-mono text-xs uppercase">
                    {language}
                  </Badge>
                </div>
                <div className="gradient-code max-h-[250px] overflow-auto code-scrollbar">
                  <CodeBlock code={code} language={language} />
                </div>
                {caption && (
                  <div className="p-4 border-t border-border">
                    <p className="text-sm">{caption}</p>
                    <div className="flex gap-2 mt-2">
                      {tags.map((tag) => (
                        <span key={tag} className="text-xs text-primary">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Settings */}
              <div className="p-4 rounded-2xl bg-card border border-border space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Snap Settings
                </h3>

                {/* Expiration */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Expires in
                  </label>
                  <div className="flex gap-2">
                    {expirationOptions.map((opt) => (
                      <Button
                        key={opt.value}
                        variant={expiration === opt.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => setExpiration(opt.value)}
                        className="flex-1"
                      >
                        {opt.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Privacy */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Who can see this?
                  </label>
                  <div className="flex gap-2">
                    {privacyOptions.map((opt) => (
                      <Button
                        key={opt.value}
                        variant={privacy === opt.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => setPrivacy(opt.value)}
                        className="flex-1 gap-1"
                      >
                        <opt.icon className="h-3 w-3" />
                        {opt.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit */}
              <Button variant="gradient" size="lg" className="w-full group">
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Share Snap
              </Button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateSnapPage;
