interface Workout {
  id: string;
  date: string;
  type: "Strength" | "Cardio" | "Yoga" | "HIIT";
  duration: number;
  caloriesBurned: number;
  completed: boolean;
}

export interface WeeklyProgress {
  totalWorkouts: number;
  completedWorkouts: number;
  caloriesBurned: number;
  minutesExercised: number;
  workouts: Workout[];
}

interface WorkoutProgress {
  currentWeek: WeeklyProgress;
}

interface GoalProgress {
  target: number;
  current: number;
  percentage: number;
}

export interface DailyGoals {
  steps: GoalProgress;
  water: GoalProgress;
  calories: GoalProgress;
  activeMinutes: GoalProgress;
  lastUpdated: string;
}

export interface WorkoutData {
  workoutProgress: WorkoutProgress;
  dailyGoals: DailyGoals;
}
