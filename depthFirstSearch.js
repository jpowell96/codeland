/* 
Depth-First Search (DFS):
Uses a last in first out method to search a graph:

This means any nodes we want to visit are added
to the end of the array (stack.push).

Depth First Search goes to the end of a path
before looking at other paths.

This method assumes the graph is represented as an adjacency
list.
*/
function depthFirstSearch(graph, start) {
	//Have an array to keep track of where to go next
	let stack = [];

	//A set to keep track of where you've already been
	let visited = new Set();

	stack.push(start);
	visited.add(start);

	while (!stack.length == 0) {
		let currentNode = stack.pop();
		let neighbors = graph[currentNode] || [];

		for (let neighbor of neighbors) {
			if (!visited.has(neighbor)) {
				stack.push(neighbor);
				visited.add(neighbor);
			}
		}
	}
}

function hasPath(graph, start, end) {
	
}