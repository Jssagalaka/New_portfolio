import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  const currentTheme = themes.find(t => t.value === theme);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="glass glass-hover relative"
        aria-label="Theme selector"
      >
        <Palette className="w-4 h-4" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Theme Selector Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute right-0 top-12 z-50 w-80 glass backdrop-blur-xl border border-border/30 rounded-xl p-4 shadow-2xl"
            >
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground mb-3">Choose Theme</h3>
                
                <div className="grid grid-cols-2 gap-2">
                  {themes.map((themeOption) => (
                    <motion.button
                      key={themeOption.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setTheme(themeOption.value);
                        setIsOpen(false);
                      }}
                      className={`
                        relative p-3 rounded-lg transition-all text-left group
                        ${theme === themeOption.value 
                          ? 'bg-primary/20 border border-primary/40' 
                          : 'glass glass-hover border border-border/20'
                        }
                      `}
                    >
                      {theme === themeOption.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-2 right-2"
                        >
                          <Check className="w-3 h-3 text-primary" />
                        </motion.div>
                      )}
                      
                      <div className="text-sm font-medium text-foreground mb-1">
                        {themeOption.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {themeOption.description}
                      </div>
                      
                      {/* Theme Preview */}
                      <div className="flex gap-1 mt-2">
                        <div className={`w-2 h-2 rounded-full ${
                          themeOption.value === 'light' ? 'bg-slate-800' : 'bg-primary'
                        }`} />
                        <div className={`w-2 h-2 rounded-full ${
                          themeOption.value === 'light' ? 'bg-blue-500' : 'bg-secondary'
                        }`} />
                        <div className={`w-2 h-2 rounded-full ${
                          themeOption.value === 'light' ? 'bg-green-500' : 'bg-accent'
                        }`} />
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                <div className="pt-2 border-t border-border/20">
                  <p className="text-xs text-muted-foreground">
                    Current: <span className="text-foreground font-medium">{currentTheme?.label}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;