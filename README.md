React-n-pussel

This is a sliding puzzle game built with React, TypeScript, CSS.

How to play:
The aim of the game is to put the tiles in a sequence of numbers starting with 1 in the upper left corner and leaving the blank space in the lower right corner.

To move a tile, simply click on it. A tile can only be moved if it is next to the blank space, and it can only be moved in a vertical or horizontal direction.

To start over with a new board, click on the "Shuffle" button to randomly rearrange the tiles and generate a fresh board.

Good luck and have fun!


Requirements for the project

- [x] The website should be responsive and work on mobile, tablet, etc.
- [x] The tiles should be numbered from 1 and upwards.
- [x] There should be exactly one empty tile.
- [x] Tiles are moved by clicking on a tile in the same row or column as the empty  tile, which moves the clicked tile.
- [ ] all tiles between it and the empty tile one step towards the empty tile.
- [x] All text should be in the Google font Open Sans.
- [x] The initial order of the tiles should be randomized.
- [x] There should be a button to shuffle the order.
- [x] If the user solves the puzzle, it should be displayed on the screen in a suitable way.

# How to Start the project 

In the project directory, first run:
### `npm install`

This will install the project dependencies.

Then run:
### `npm start`

To run the app in the development mode.
Open (http://localhost:3000) to view it in the browser.

To adjust the number of tiles open utils/config.ts and change the numbers in rows and cols.