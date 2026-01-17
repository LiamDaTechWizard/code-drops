import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Search,
  PlusCircle,
  Users,
  User,
  Zap,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Feed", path: "/" },
  { icon: Search, label: "Discover", path: "/discover" },
  { icon: PlusCircle, label: "Snap", path: "/create", isMain: true },
  { icon: Users, label: "Collab", path: "/collab" },
  { icon: User, label: "Profile", path: "/profile" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center"
            >
              <Zap className="h-5 w-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">SNAPCODE</span>
          </Link>

          {/* Center Nav */}
          <div className="flex items-center gap-1">
            {navItems.filter(item => !item.isMain).map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full" />
            </motion.button>
            <Link to="/create">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-primary text-white font-semibold"
              >
                <PlusCircle className="h-4 w-4" />
                New Snap
              </motion.button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-border/50 px-2 py-2 safe-area-inset-bottom">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            if (item.isMain) {
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-lg shadow-primary/30 -mt-6"
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </motion.div>
                </Link>
              );
            }

            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
