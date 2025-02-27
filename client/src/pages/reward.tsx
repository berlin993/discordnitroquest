import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Reward() {
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      toast({
        title: "Link copied to clipboard",
        description: "Share with your friends!",
        variant: "default"
      });
    } catch (error) {
      toast({
        title: "Failed to copy link",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Congratulations!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            You've completed all levels! Share this site & join our Discord to claim your Nitro.
          </p>

          <div className="flex flex-col gap-2">
            <Button onClick={handleShare} variant="outline" className="w-full">
              <Share2 className="mr-2 h-4 w-4" />
              Share Website
            </Button>
            
            <Button
              onClick={() => window.open("https://discord.gg/YOUR_DISCORD_SERVER", "_blank")}
              className="w-full"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Join Discord to Claim
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Contact <span className="font-medium">itx_me_hammad</span> on Discord to receive your reward
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
