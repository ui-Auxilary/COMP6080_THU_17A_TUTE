# COMP6080 Sample Exam

A single-page application with four interactive games and a dashboard for score tracking.

## Getting Started

```bash
yarn install
yarn dev
```

## Project Structure

- `src/pages/Dashboard/` - Home page with total score tracking via localStorage
- `src/pages/Header/` - Responsive navigation (desktop: full names, mobile ≤800px: abbreviations)
- `src/pages/Footer/` - Fixed footer bar
- `src/pages/Blanko/` - Game 1: Fill-in-the-blanks word game
- `src/pages/Slido/` - Game 2: Sliding puzzle (3x3 grid)
- `src/pages/Tetro/` - Game 3: Simplified Tetris (10x12 grid)
- `src/pages/Hanoi/` - Game 4: Tower of Hanoi puzzle

## Routes

- `/` - Dashboard
- `/blanko` - Blanko game
- `/slido` - Slido game
- `/tetro` - Tetro game
- `/hanoi` - Hanoi game

## Features

### Dashboard
- Displays total games won
- Fetches initial score from: `https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json`
- Persists score in localStorage
- Reset button to start fresh

### Blanko (18 marks)
- 12 character boxes with random string display
- 3 random non-space characters become input fields
- Auto-validates when all 3 inputs filled
- Increments score on correct answers

### Slido (21 marks)
- 3x3 sliding puzzle grid
- Click adjacent cells or use arrow keys to slide
- Solve button for instant win
- Validates moves (can't place on occupied space)

### Tetro (22 marks)
- 10x12 game board
- Random blocks (2x2, 2x1, 1x1) fall automatically
- Arrow keys to move left/right
- Complete rows turn green
- Win at 5 completed rows, lose if block reaches top

### Hanoi (20 marks)
- Three pegs with discs of different sizes
- Click disc to select, click peg to move
- Validates rules (larger disc can't go on smaller)
- Win when all discs on right peg in correct order

## Browser Compatibility

Tested on Google Chrome (latest version)

## Styling

- Responsive design with mobile support
- Basic styling (no fancy animations)
- Header: 80px fixed, #eeeeee background
- Footer: 50px fixed to bottom, #999999 background

