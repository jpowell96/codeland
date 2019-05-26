/* 
Depth-First Search (DFS):
Uses a last in first out method to search a graph.
Whatever is at the end of the array is what we'll look at next.
*/
function depthFirstSearch(graph, start) {
	//Have an array to keep track of where to go next
	let toVisit = [];

	//A set to keep track of where you've already been
	let visited = new Set();

	toVisit.push(start);
	visited.add(start);

	while (!toVisit.length == 0) {
		let currentNode = toVisit.pop();
		console.log(currentNode);
		let neighbors = graph[currentNode] || [];

		for (let neighbor of neighbors) {
			if (!visited.has(neighbor)) {
				toVisit.push(neighbor);
				visited.add(neighbor);
			}
		}
	}
}

/* 
Breadth-First Search (BFS):
Uses first in  first out method to search a graph.
Whatever is at the beginning of the array is what we'll look at next.
*/
function breadthFirstSearch(graph, start) {
	//An array to keep track of where to go next
	let toVisit = [];

	//A set to keep track of where you've already been
	let visited = new Set();

	toVisit.unshift(start);
	visited.add(start);

	while(!toVisit.length == 0) {
		let currentNode = toVisit.pop();
		let neighbors = graph[currentNode] || [];

		for (let neighbor of neighbors) {
			if (!visited.has(neighbor)) {
				toVisit.unshift(neighbor);
				visited.add(neighbor);
			}
		}
	}
}

//Example graph
flights = {};
flights['ATL'] = ['NYC', 'LA'];
flights['NYC'] = ['ATL', 'LA'];
flights['LA'] = ['ATL'];

console.log(flights);

//I expect: ATL, LA, NYC
console.log("Depth-First Search");
depthFirstSearch(flights, 'ATL');


console.log("=================");

//I expect: ATL, NYC, LA
console.log("Breadth-First Search");
breadthFirstSearch(flights, 'ATL');


// //Example tree
treeStructure = {};
treeStructure['A'] = ['B', 'C'];
treeStructure['B'] = ['D', 'E'];
treeStructure['C'] = ['F', 'G'];
console.log("Depth-First Search");
depthFirstSearch(flights, "ATL");


console.log("=================");

//I expect: ATL, LA, NYC
console.log("Breadth-First Search");
breadthFirstSearch(flights, "ATL");





