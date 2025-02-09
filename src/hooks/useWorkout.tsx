import { useState, useEffect } from "react";
import { WorkoutData } from "@/types/workout";
import workoutData from "../workout-data.json";

export function useWorkout() {
  const [data, setData] = useState<WorkoutData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchWorkoutData = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setData(workoutData as WorkoutData);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchWorkoutData();
  }, []);

  return { data, isLoading, error };
}
