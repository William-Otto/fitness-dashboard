import { DailyGoals as DailyGoalsType } from "@/types/workout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  dailyGoals: DailyGoalsType;
}

export function DailyGoals({ dailyGoals }: Props) {
  const [checkedGoals, setCheckedGoals] = useState<Record<string, boolean>>({});

  const toggleGoal = (key: string) => {
    setCheckedGoals((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Goals</CardTitle>
        <CardDescription>
          Last updated: {new Date(dailyGoals.lastUpdated).toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(dailyGoals).map(([key, goal]) => {
            if (key === "lastUpdated") return null;
            return (
              <motion.div
                key={key}
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className={`w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center ${
                        checkedGoals[key]
                          ? "border-green-500 bg-green-500"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                      onClick={() => toggleGoal(key)}
                      whileTap={{ scale: 0.9 }}
                    >
                      {checkedGoals[key] && (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3 h-3 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </motion.svg>
                      )}
                    </motion.div>
                    <span className="capitalize">{key}</span>
                  </div>
                  <span>
                    {goal.current} / {goal.target} {goal.unit || ""}
                  </span>
                </div>
                <Progress value={goal.percentage} />
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
