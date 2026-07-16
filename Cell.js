export default class Cell {
  constructor() {
    this.ship = null;
  }

  isEmpty() {
    return this.ship === null;
  }
}
