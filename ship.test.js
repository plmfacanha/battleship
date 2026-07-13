import Ship from "./ship.js";

test("hit() called twice increase the damage by 2", () => {
  const ship = new Ship(3);

  ship.hit();
  ship.hit();

  expect(ship.damage).toBe(2);
});
