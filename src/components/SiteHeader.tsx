import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold dark:text-neutral-50">
              FitTrack Pro
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-4">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
              >
                <Button className="md:flex hidden">Start Workout</Button>
                <Button size="icon" className="md:hidden flex">
                  <Plus className="h-4 w-4" />
                </Button>
              </motion.div>
            </nav>

            <nav className="flex items-center gap-2">
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
