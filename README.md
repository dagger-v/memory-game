# Rules

- Click a card
- Don't click the same card twice
- If you do click the same card twice it's game over and your score resets
- Keep clicking until your score reaches 8

# CODE BREAK DOWN

# Header

1. Display name of game - _Animal Crossing Memory_
2. Have _Score_ / _High Score_ / _Max Score_ displayed as a button

- _Score_ increases by 1 after clicking a card for the first time
- _Score_ resets to 0 after clicking the same card twice
- _High Score_ keeps total highest score
- _Max Score_ always displays as 8

# Content

1. Start with 8 cards on screen

- There should be 2 rows and 2 columns, for a max number of 8 cards
- Tried with 10 cards and it didn't look as good

2. Cards will need to shuffle (_array method_) randomly (_Math.random()_) after each click

- Will need to include a way to remember which cards I've clicked

3. Include a way to reset the game

- Game resets when same card clicked twice
- Game resets when you reach a score of 8
