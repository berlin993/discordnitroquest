import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/firebase";
import { Trophy } from "lucide-react";

export default function Home() {
  const { data: remainingRewards } = useQuery({
    queryKey: ["/api/rewards/remaining"],
    enabled: false
  });

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Welcome to NitroQuest
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            Solve 100 challenging puzzles and win Discord Nitro!
          </p>

          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            <span>Remaining Nitro Rewards: {remainingRewards ?? 5}</span>
          </div>

          {auth.currentUser ? (
            <Link href="/puzzle">
              <Button className="w-full">Start Puzzling</Button>
            </Link>
          ) : (
            <Link href="/auth">
              <Button className="w-full">Sign In to Start</Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
