import Ship from "./ship.js";

test("hit() called twice increase the damage by 2", () => {
  const ship = new Ship(3);

  ship.hit();
  ship.hit();

  expect(ship.damage).toBe(2);
});

test("check if ship object is sunk after method hit() reaches its length", () => {
  const ship = new Ship(3);

  ship.hit();
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBeTruthy();
});
