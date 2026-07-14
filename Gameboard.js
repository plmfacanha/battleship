import Ship from "./Ship.js";

/* 
* Create a Gameboard class/factory.

  // ?  Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.
  ? Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.
  ? Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
  ? Gameboards should keep track of missed attacks so they can display them properly.
  ? Gameboards should be able to report whether or not all of their ships have been sunk.

*/
export default class Gameboard {
  createShips() {
    const shipOne = new Ship(1);
    const shipTwo = new Ship(1);
    const shipThree = new Ship(2);
    const shipFour = new Ship(2);
    const shipFive = new Ship(2);
    const shipSix = new Ship(3);
    const shipSeven = new Ship(3);
    const shipEight = new Ship(4);

    return {
      shipOne,
      shipTwo,
      shipThree,
      shipFour,
      shipFive,
      shipSix,
      shipSeven,
      shipEight,
    };
  }

  placeShips() {
    const {
      shipOne,
      shipTwo,
      shipThree,
      shipFour,
      shipFive,
      shipSix,
      shipSeven,
      shipEight,
    } = this.createShips();

    // TODO: find a way to place the ship randomly on the board
  }
}

const gameboard = new Gameboard();
gameboard.placeShips();
