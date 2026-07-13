import { Ship } from "./ship.js";

const ship = new Ship(10);

test("check the current damage of a Ship", () => {
  expect(ship.hit(), toBe(1));
});
