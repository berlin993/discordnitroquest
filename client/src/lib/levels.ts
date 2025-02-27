export interface PuzzleLevel {
  id: number;
  type: 'math' | 'memory' | 'pattern' | 'word';
  question: string;
  answer: string | number;
  options?: string[];
}

export const levels: PuzzleLevel[] = [
  // First 10 levels (existing)
  {
    id: 1,
    type: 'math',
    question: 'Solve for x: 2x + 5 = 15',
    answer: 5
  },
  {
    id: 2,
    type: 'math',
    question: 'Click the biggest number',
    answer: '18',
    options: ['4', '18', '9', '2']
  },
  {
    id: 3,
    type: 'pattern',
    question: 'What comes next? 2, 4, 8, 16, ?',
    answer: '32'
  },
  {
    id: 4,
    type: 'math',
    question: 'Click the odd number out',
    answer: '7',
    options: ['12', '8', '10', '7']
  },
  {
    id: 5,
    type: 'math',
    question: 'What is 5 + 3 × 2?',
    answer: 11
  },
  {
    id: 6,
    type: 'pattern',
    question: 'Click the smallest shape',
    answer: 'circle',
    options: ['square', 'circle', 'triangle', 'rectangle']
  },
  {
    id: 7,
    type: 'pattern',
    question: 'If 1 = 5, 2 = 10, 3 = 15, 4 = ?',
    answer: '20'
  },
  {
    id: 8,
    type: 'word',
    question: 'What is the opposite of left?',
    answer: 'right'
  },
  {
    id: 9,
    type: 'pattern',
    question: 'Which shape has 4 sides?',
    answer: 'square',
    options: ['circle', 'triangle', 'square', 'pentagon']
  },
  {
    id: 10,
    type: 'math',
    question: 'Solve: 15 ÷ (3 + 2) = ?',
    answer: 3
  },
  // Levels 11-20 (Math focused)
  {
    id: 11,
    type: 'math',
    question: 'If 3x - 7 = 14, what is x?',
    answer: 7
  },
  {
    id: 12,
    type: 'math',
    question: 'Select the prime number',
    answer: '23',
    options: ['21', '22', '23', '24']
  },
  {
    id: 13,
    type: 'math',
    question: 'What is 125 ÷ 5?',
    answer: 25
  },
  {
    id: 14,
    type: 'pattern',
    question: 'Complete: 1, 4, 9, 16, ?',
    answer: '25'
  },
  {
    id: 15,
    type: 'math',
    question: 'What is 7² - 3²?',
    answer: 40
  },
  // Levels 16-20 (Word focused)
  {
    id: 16,
    type: 'word',
    question: 'What is the opposite of hot?',
    answer: 'cold'
  },
  {
    id: 17,
    type: 'word',
    question: 'Select the synonym of "happy"',
    answer: 'joyful',
    options: ['sad', 'angry', 'joyful', 'tired']
  },
  {
    id: 18,
    type: 'word',
    question: 'What comes after "Ready, Set, ..."?',
    answer: 'go'
  },
  {
    id: 19,
    type: 'word',
    question: 'Choose the correct spelling',
    answer: 'necessary',
    options: ['necesary', 'neccesary', 'necessary', 'necessery']
  },
  {
    id: 20,
    type: 'word',
    question: 'Complete: Day is to Night as Light is to...',
    answer: 'dark'
  },
  // Levels 21-30 (Pattern focused)
  {
    id: 21,
    type: 'pattern',
    question: 'What comes next? 🔵 ⭐ 🔵 ⭐ 🔵 ?',
    answer: 'star',
    options: ['circle', 'star', 'triangle', 'square']
  },
  {
    id: 22,
    type: 'pattern',
    question: 'Complete the sequence: 2, 6, 12, 20, ?',
    answer: '30'
  },
  {
    id: 23,
    type: 'pattern',
    question: 'If ABC = 123, DEF = 456, then GHI = ?',
    answer: '789'
  },
  {
    id: 24,
    type: 'pattern',
    question: 'What comes next? 1, 3, 6, 10, ?',
    answer: '15'
  },
  {
    id: 25,
    type: 'pattern',
    question: 'Complete: Monday, Wednesday, Friday, ?',
    answer: 'sunday'
  },
  // Levels 26-30 (Mixed types with increasing difficulty)
  {
    id: 26,
    type: 'math',
    question: 'Solve: (4 × 6) + (3 × 5)',
    answer: 39
  },
  {
    id: 27,
    type: 'word',
    question: 'Unscramble: UZPZLE',
    answer: 'puzzle'
  },
  {
    id: 28,
    type: 'pattern',
    question: 'What number is missing? 3, 7, 15, 31, ?',
    answer: '63'
  },
  {
    id: 29,
    type: 'math',
    question: 'If 8 is 40% of a number, what is the number?',
    answer: 20
  },
  {
    id: 30,
    type: 'word',
    question: 'Select the antonym of "ancient"',
    answer: 'modern',
    options: ['old', 'modern', 'historic', 'aged']
  },
  // Levels 31-40 (Advanced Math)
  {
    id: 31,
    type: 'math',
    question: 'Solve: √(144) + 5²',
    answer: 37
  },
  {
    id: 32,
    type: 'math',
    question: 'If y = 2x + 3 and y = 13, what is x?',
    answer: 5
  },
  {
    id: 33,
    type: 'math',
    question: 'Choose the largest prime number',
    answer: '97',
    options: ['91', '93', '95', '97']
  },
  {
    id: 34,
    type: 'math',
    question: 'What is (7 × 8) - (9 × 4)?',
    answer: 20
  },
  {
    id: 35,
    type: 'math',
    question: 'If 15% of x is 45, what is x?',
    answer: 300
  },
  {
    id: 36,
    type: 'pattern',
    question: 'What is the next number? 1, 1, 2, 3, 5, 8, ?',
    answer: '13'
  },
  {
    id: 37,
    type: 'math',
    question: 'What is 2³ × 3²?',
    answer: 72
  },
  {
    id: 38,
    type: 'pattern',
    question: 'Complete: 64, 32, 16, 8, ?',
    answer: '4'
  },
  {
    id: 39,
    type: 'math',
    question: 'What is the sum of angles in a triangle?',
    answer: 180
  },
  {
    id: 40,
    type: 'word',
    question: 'Unscramble: HTMTAEMACIS',
    answer: 'mathematics'
  },

  // Levels 41-50 (Advanced Patterns)
  {
    id: 41,
    type: 'pattern',
    question: 'What comes next? 🔴 🔵 🔵 🔴 🔵 🔵 ?',
    answer: 'red',
    options: ['blue', 'red', 'green', 'yellow']
  },
  {
    id: 42,
    type: 'pattern',
    question: 'Complete: 2, 6, 18, 54, ?',
    answer: '162'
  },
  {
    id: 43,
    type: 'pattern',
    question: 'What is missing? 3, 6, 12, ?, 48, 96',
    answer: '24'
  },
  {
    id: 44,
    type: 'word',
    question: 'If HELLO is IFMMP, what is WORLD?',
    answer: 'xpsme'
  },
  {
    id: 45,
    type: 'pattern',
    question: 'Next in sequence: Triangle, Square, Pentagon, ?',
    answer: 'hexagon'
  },
  {
    id: 46,
    type: 'pattern',
    question: 'Complete: 1, 3, 7, 15, ?',
    answer: '31'
  },
  {
    id: 47,
    type: 'pattern',
    question: 'What comes next? A1, B2, C3, D4, ?',
    answer: 'e5'
  },
  {
    id: 48,
    type: 'pattern',
    question: 'Complete: 100, 95, 85, 70, ?',
    answer: '50'
  },
  {
    id: 49,
    type: 'word',
    question: 'If CAT is DOG, then MOUSE is?',
    answer: 'house'
  },
  {
    id: 50,
    type: 'pattern',
    question: 'What is next? ⬆️ ➡️ ⬇️ ?',
    answer: 'left',
    options: ['up', 'right', 'down', 'left']
  },

  // Levels 51-60 (Logic and Word Problems)
  {
    id: 51,
    type: 'word',
    question: 'Complete: Book is to Reader as Food is to ?',
    answer: 'eater'
  },
  {
    id: 52,
    type: 'math',
    question: 'If 5 cats catch 5 mice in 5 minutes, how many cats catch 100 mice in 100 minutes?',
    answer: 5
  },
  {
    id: 53,
    type: 'word',
    question: 'Select the word that means "very large"',
    answer: 'enormous',
    options: ['tiny', 'enormous', 'medium', 'average']
  },
  {
    id: 54,
    type: 'pattern',
    question: 'If Monday is 1, Wednesday is 3, then Friday is ?',
    answer: '5'
  },
  {
    id: 55,
    type: 'word',
    question: 'What is the opposite of "artificial"?',
    answer: 'natural'
  },
  {
    id: 56,
    type: 'math',
    question: 'How many sides does a octagon have?',
    answer: 8
  },
  {
    id: 57,
    type: 'word',
    question: 'Unscramble: LZEPZU MAGE',
    answer: 'puzzle game'
  },
  {
    id: 58,
    type: 'pattern',
    question: 'What is the missing color? Red, Yellow, Blue, Green, Purple, ?',
    answer: 'orange'
  },
  {
    id: 59,
    type: 'math',
    question: 'If a triangle has angles 90° and 45°, what is the third angle?',
    answer: 45
  },
  {
    id: 60,
    type: 'word',
    question: 'Complete: Sky is to Blue as Grass is to ?',
    answer: 'green'
  },

  // Levels 61-70 (Advanced Logic)
  {
    id: 61,
    type: 'math',
    question: 'What is the least common multiple of 6 and 8?',
    answer: 24
  },
  {
    id: 62,
    type: 'pattern',
    question: 'What number comes next? 5, 8, 13, 21, ?',
    answer: '34'
  },
  {
    id: 63,
    type: 'word',
    question: 'If "apple" is "1234", what is "pear"?',
    answer: '2314'
  },
  {
    id: 64,
    type: 'math',
    question: 'What is 25% of 300?',
    answer: 75
  },
  {
    id: 65,
    type: 'pattern',
    question: 'Complete the series: 2, 4, 8, 16, 32, ?',
    answer: '64'
  },
  {
    id: 66,
    type: 'word',
    question: 'Choose the correct order',
    answer: 'alphabetical',
    options: ['random', 'alphabetical', 'reverse', 'numerical']
  },
  {
    id: 67,
    type: 'math',
    question: 'If 3 pens cost $12, how much do 7 pens cost?',
    answer: 28
  },
  {
    id: 68,
    type: 'pattern',
    question: 'What comes next? AABABC?',
    answer: 'd'
  },
  {
    id: 69,
    type: 'word',
    question: 'If HAPPY = 5, SAD = 3, then EXCITED = ?',
    answer: '7'
  },
  {
    id: 70,
    type: 'math',
    question: 'What is the square root of 256?',
    answer: 16
  },

  // Levels 71-80 (Complex Patterns)
  {
    id: 71,
    type: 'pattern',
    question: 'Complete: 🌞 🌧️ ⛈️ 🌧️ 🌞 ?',
    answer: 'rain',
    options: ['sun', 'rain', 'storm', 'cloud']
  },
  {
    id: 72,
    type: 'math',
    question: 'Solve: 5x + 3 = 28',
    answer: 5
  },
  {
    id: 73,
    type: 'word',
    question: 'Unscramble: RLDDSIOC TNIRO',
    answer: 'discord nitro'
  },
  {
    id: 74,
    type: 'pattern',
    question: 'What comes next? 1, 4, 9, 16, 25, ?',
    answer: '36'
  },
  {
    id: 75,
    type: 'math',
    question: 'What is 75% of 200?',
    answer: 150
  },
  {
    id: 76,
    type: 'word',
    question: 'Select the synonym of "brave"',
    answer: 'courageous',
    options: ['fearful', 'courageous', 'timid', 'weak']
  },
  {
    id: 77,
    type: 'pattern',
    question: 'Complete: 13, 21, 34, ?',
    answer: '55'
  },
  {
    id: 78,
    type: 'math',
    question: 'What is the perimeter of a square with side length 9?',
    answer: 36
  },
  {
    id: 79,
    type: 'word',
    question: 'If BLUE is 1234, what is RED?',
    answer: '345'
  },
  {
    id: 80,
    type: 'pattern',
    question: 'What shape comes next? ⭐ ⬆️ ⭐ ⬆️ ⭐ ?',
    answer: 'up',
    options: ['star', 'up', 'down', 'right']
  },

  // Levels 81-90 (Advanced Word Problems)
  {
    id: 81,
    type: 'word',
    question: 'Complete: Earth is to Planet as Moon is to ?',
    answer: 'satellite'
  },
  {
    id: 82,
    type: 'math',
    question: 'What is 20% of 650?',
    answer: 130
  },
  {
    id: 83,
    type: 'pattern',
    question: 'What number is missing? 7, 14, 28, ?, 112',
    answer: '56'
  },
  {
    id: 84,
    type: 'word',
    question: 'Unscramble: RLVOPE UZLEPZ',
    answer: 'solver puzzle'
  },
  {
    id: 85,
    type: 'math',
    question: 'If 4x + 2 = 30, what is x?',
    answer: 7
  },
  {
    id: 86,
    type: 'pattern',
    question: 'Complete the sequence: 3, 1, 4, 1, 5, ?',
    answer: '9'
  },
  {
    id: 87,
    type: 'word',
    question: 'What is the antonym of "maximum"?',
    answer: 'minimum'
  },
  {
    id: 88,
    type: 'math',
    question: 'What is the area of a rectangle with length 8 and width 5?',
    answer: 40
  },
  {
    id: 89,
    type: 'pattern',
    question: 'What comes next? A1B, C2D, E3F, ?',
    answer: 'g4h'
  },
  {
    id: 90,
    type: 'word',
    question: 'If PUZZLE = 6, GAME = 4, then CHALLENGE = ?',
    answer: '9'
  },

  // Levels 91-100 (Final Challenge)
  {
    id: 91,
    type: 'math',
    question: 'What is (15 × 4) ÷ (10 - 5)?',
    answer: 12
  },
  {
    id: 92,
    type: 'pattern',
    question: 'Complete: 2, 6, 12, 20, 30, ?',
    answer: '42'
  },
  {
    id: 93,
    type: 'word',
    question: 'Unscramble: RGDONCTASNL ATIUS',
    answer: 'congratulations'
  },
  {
    id: 94,
    type: 'math',
    question: 'What is 33% of 300?',
    answer: 99
  },
  {
    id: 95,
    type: 'pattern',
    question: 'What comes next? 🎮 🎲 🎮 🎲 🎮 ?',
    answer: 'dice',
    options: ['game', 'dice', 'controller', 'play']
  },
  {
    id: 96,
    type: 'word',
    question: 'Select the closest meaning to "victory"',
    answer: 'triumph',
    options: ['defeat', 'triumph', 'battle', 'game']
  },
  {
    id: 97,
    type: 'math',
    question: 'If x² = 121, what is x?',
    answer: 11
  },
  {
    id: 98,
    type: 'pattern',
    question: 'Complete: 1000, 500, 250, ?',
    answer: '125'
  },
  {
    id: 99,
    type: 'word',
    question: 'What word means "final challenge"?',
    answer: 'ultimate'
  },
  {
    id: 100,
    type: 'math',
    question: 'For the final challenge: What is 1000 ÷ (10 × 2)?',
    answer: 50
  }
];

export function getLevelById(id: number): PuzzleLevel | undefined {
  return levels.find(level => level.id === id);
}