class ShortestPath{
	constructor(input) {
		this.input = input;
	}

	initializeGraph() {
		const adjacencyList = new Map();
		const nodeCount = this.input.shift();
		const nodes = [];
		for (let i = 0; i < nodeCount; i++) {
			const node = this.input.shift();
			nodes.push(node);
			adjacencyList.set(node, new graphNode(node));
		}
		const edgeCount = this.input.length;
		for (const edge of this.input) {
			const [source, dest] = edge.split('-');
			const sourceNode = adjacencyList.get(source);
			const sourceList = sourceNode.neighbours;
			if (!sourceList.includes(dest)) {
				sourceList.push(dest);
				adjacencyList.set(source, sourceNode);
			}
			const destNode = adjacencyList.get(dest);
			const destList = destNode.neighbours;
			if (!destList.includes(source)) {
				destList.push(source);
				adjacencyList.set(dest, destNode);
			}
		}
		const result = this.findShortestPath(nodes[0], nodes[nodes.length -1], adjacencyList);
		const resultPath = [];
		let pathNode = result;
		while (pathNode) {
			resultPath.unshift(pathNode.data);
			pathNode = pathNode.parent;
		}
		return resultPath.join('-');
	}

	findShortestPath(start, goal, adjList) {
		const queue = [];
		queue.push(start);
		let parent = null;
		while (queue.length > 0) {
			const visit = queue.shift();
			const currentNode = adjList.get(visit);
			if (!currentNode.visited) {
				currentNode.visited = true;
			}
			if(visit === goal) {
				return currentNode;
			}
			const neighbours = currentNode.neighbours;
			for (const node of neighbours) {
				const neighbourNode = adjList.get(node);
				if (!neighbourNode.visited && !neighbourNode.parent) {
					neighbourNode.parent = currentNode;
				}
			}
			queue.push(...neighbours);
			parent = currentNode;
		}
	}
}

class graphNode {
	constructor(data) {
		this.data = data;
		this.parent = null;
		this.visited = false;
		this.neighbours = [];
	}
}

const testOne = ["5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"];
const shortestPathOne = new ShortestPath(testOne);
console.log(shortestPathOne.initializeGraph());

const testTwo = ["4","X","Y","Z","W","X-Y","Y-Z","X-W"];
const shortestPathTwo = new ShortestPath(testTwo);
console.log(shortestPathTwo.initializeGraph());

const testThree = ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"];
const shortestPathThree = new ShortestPath(testThree);
console.log(shortestPathThree.initializeGraph());

const testFour= ["4","A","B","C","D","A-B","B-D","B-C","C-D"];
const shortestPathFour = new ShortestPath(testFour);
console.log(shortestPathFour.initializeGraph());