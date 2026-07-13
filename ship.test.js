import Ship from "./Ship.js";

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

  expect(ship.isSunk()).toBe(true);
});

test("check if ship object is still floating (not sunk)", () => {
  const ship = new Ship(5);

  ship.hit();
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(false);
});
