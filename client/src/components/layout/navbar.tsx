import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

export function Navbar() {
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      toast({
        title: "Signed out successfully",
        variant: "default"
      });
    } catch (error) {
      toast({
        title: "Error signing out",
        variant: "destructive"
      });
    }
  };

  return (
    <nav className="w-full bg-background border-b border-border h-14 flex items-center px-4">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link href="/">
          <a className="text-xl font-bold text-primary">NitroQuest</a>
        </Link>
        
        <div className="flex items-center gap-4">
          {auth.currentUser ? (
            <>
              <span className="text-sm text-muted-foreground">
                {auth.currentUser.displayName}
              </span>
              <Button variant="ghost" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <Link href="/auth">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
