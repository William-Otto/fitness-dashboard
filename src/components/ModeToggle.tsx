import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTheme } from "@/components/ThemeProvider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" color="#000" />
      <Moon className="hidden h-5 w-5 dark:block" color="#fff" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
