import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PuzzleLevel } from "@/lib/levels";

interface MathPuzzleProps {
  level: PuzzleLevel;
  onSolve: (correct: boolean) => void;
}

export function MathPuzzle({ level, onSolve }: MathPuzzleProps) {
  const [answer, setAnswer] = useState("");

  const normalizeAnswer = (input: string | number): string => {
    // Convert to string and normalize
    return String(input)
      .toLowerCase() // Make case-insensitive
      .trim() // Remove leading/trailing spaces
      .replace(/\s+/g, ' '); // Normalize multiple spaces to single space
  };

  const checkAnswer = (userAnswer: string, correctAnswer: string | number): boolean => {
    // For numeric answers, try parsing as number first
    if (typeof correctAnswer === 'number') {
      const numericAnswer = parseFloat(userAnswer);
      return !isNaN(numericAnswer) && numericAnswer === correctAnswer;
    }

    // For string answers, normalize both and compare
    return normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = checkAnswer(answer, level.answer);
    onSolve(isCorrect);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Level {level.id}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-lg font-medium">{level.question}</div>

          {level.options ? (
            <div className="grid grid-cols-2 gap-2">
              {level.options.map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setAnswer(option);
                    onSolve(checkAnswer(option, level.answer));
                  }}
                >
                  {option}
                </Button>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              <Input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your answer"
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}