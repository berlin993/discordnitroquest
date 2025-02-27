import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerWithEmail, loginWithEmail } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

type AuthMode = "login" | "register";

export default function Auth() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const validateForm = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (mode === "register" && password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const authResult = mode === "login" 
        ? await loginWithEmail(email, password)
        : await registerWithEmail(email, password);

      // Always create/update user in backend after successful Firebase auth
      await apiRequest("POST", "/api/users", {
        uid: authResult.uid,
        username: authResult.username
      });

      // Redirect only after both Firebase and backend operations succeed
      setLocation("/puzzle");
      toast({
        title: mode === "login" ? "Signed in successfully" : "Registered successfully",
        variant: "default"
      });
    } catch (error: any) {
      console.error("Auth error:", error);
      setError(error.message);
      toast({
        title: "Authentication failed",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {mode === "login" ? "Sign in to NitroQuest" : "Create an Account"}
          </CardTitle>
          <CardDescription className="text-center">
            Solve puzzles and win Discord Nitro!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                disabled={loading}
              />
              {mode === "register" && (
                <p className="text-xs text-muted-foreground mt-1">
                  Password must be at least 6 characters long
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={loading}
            >
              {loading ? "Please wait..." : (mode === "login" ? "Sign In" : "Register")}
            </Button>

            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => {
                  setMode(mode === "login" ? "register" : "login");
                  setError("");
                }}
                className="text-primary hover:underline"
                disabled={loading}
              >
                {mode === "login" 
                  ? "Don't have an account? Register" 
                  : "Already have an account? Sign in"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}