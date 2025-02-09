import { DailyGoals } from "@/components/DailyGoals";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkoutProgress } from "@/components/WorkoutProgress";
import { useWorkout } from "@/hooks/useWorkout";

export function Dashboard() {
  const { data, isLoading } = useWorkout();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 p-8">
      <SiteHeader />

      {data && !isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <WorkoutProgress currentWeek={data.workoutProgress.currentWeek} />
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <DailyGoals dailyGoals={data.dailyGoals} />
          </div>
        </div>
      ) : (
        <div className="flex h-screen w-full items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 dark:border-gray-600 dark:border-t-gray-100 h-12 w-12" />
            <p className="text-gray-500 dark:text-gray-400">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
}
