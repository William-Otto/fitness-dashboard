import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { WeeklyProgress } from "@/types/workout";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

interface Props {
  currentWeek: WeeklyProgress;
}

export function WorkoutProgress({ currentWeek }: Props) {
  const chartData = currentWeek.workouts.map((workout) => ({
    name: new Date(workout.date).toLocaleDateString("en-US", {
      weekday: "short",
    }),
    calories: workout.caloriesBurned,
    duration: workout.duration,
    completed: workout.completed,
  }));

  const completionPercentage = Math.round(
    (currentWeek.completedWorkouts / currentWeek.totalWorkouts) * 100
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Weekly Workout Progress</span>
          <span
            className={`text-base px-3 py-1 rounded-full ${
              completionPercentage >= 75
                ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-100"
                : completionPercentage >= 50
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-100"
                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-100"
            }`}
          >
            {completionPercentage}% Complete
          </span>
        </CardTitle>
        <CardDescription className="flex flex-col gap-1">
          <span>
            {currentWeek.completedWorkouts} of {currentWeek.totalWorkouts}{" "}
            workouts completed this week
          </span>
          <span className="text-sm text-muted-foreground">
            Track your daily workout duration and calories burned
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            calories: {
              label: "Calories Burned",
              color: "red",
            },
            duration: {
              label: "Duration (mins)",
              color: "green",
            },
          }}
          className="aspect-auto h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                yAxisId="left"
                dataKey="calories"
                fill="var(--color-calories)"
                radius={[4, 4, 0, 0]}
                opacity={0.8}
              />
              <Bar
                yAxisId="right"
                dataKey="duration"
                fill="var(--color-duration)"
                radius={[4, 4, 0, 0]}
                opacity={0.8}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="mt-6">
          <h3 className="font-semibold mb-3">Workout Details</h3>
          <div className="space-y-2">
            {currentWeek.workouts.map((workout) => (
              <div
                key={workout.id}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <div>
                  <p className="font-medium">{workout.type}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(workout.date).toLocaleDateString("en-US", {
                      weekday: "long",
                    })}{" "}
                    • {workout.duration} mins • {workout.caloriesBurned} cal
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    workout.completed
                      ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-100"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-100"
                  }`}
                >
                  {workout.completed ? "Completed" : "Pending"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
