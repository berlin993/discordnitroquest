import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { MathPuzzle } from "@/components/puzzle-types/math";
import { getLevelById } from "@/lib/levels";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { auth } from "@/lib/firebase";
import type { User } from "@shared/schema";
import { Loader2 } from "lucide-react";

export default function Puzzle() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const { data: user, isLoading } = useQuery<User>({
    queryKey: ["/api/users/me"],
    enabled: !!auth.currentUser,
  });

  const { mutate: completePuzzle, isPending } = useMutation({
    mutationFn: async (levelId: number) => {
      const response = await apiRequest("POST", "/api/levels/complete", { levelId });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/users/me"] });
    },
    onError: (error) => {
      console.error('Level completion error:', error);
      toast({
        title: "Error",
        description: "Failed to save progress. Please try again.",
        variant: "destructive"
      });
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    setLocation("/auth");
    return null;
  }

  const currentLevel = getLevelById(user.currentLevel);

  if (!currentLevel) {
    setLocation("/reward");
    return null;
  }

  const handleSolve = (correct: boolean) => {
    if (correct && !isPending) {
      toast({
        title: "Correct!",
        description: "Moving to next level...",
        variant: "default"
      });
      completePuzzle(currentLevel.id);
    } else if (!correct) {
      toast({
        title: "Incorrect",
        description: "Try again!",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background p-4">
      <MathPuzzle level={currentLevel} onSolve={handleSolve} />
    </div>
  );
}