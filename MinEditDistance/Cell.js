module.exports = class Cell {
	constructor(cost = 0, parent = null) {
		this.cost = cost;
		this.parent = parent;
	}
}