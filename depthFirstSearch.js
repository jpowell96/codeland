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
	/* 
	Have an array to keep track of where to go next
	To use an array as a stack, call push when adding elements
	to the array and call pop when removing elements.
	*/
	const stack = [];

	//A set to keep track of where you've already been
	const visited = new Set();

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

/* 
Given a graph, a start position, and an end position
return true if there is a path from start to end
and false otherwise.

*/
function hasPath(graph, start, end) {
	const stack = [];
	const visited = new Set();

	stack.push(start);
	visited.add(start);

	while (!stack.length == 0) {
		let currentNode = stack.pop();
		
		if (currentNode == end) {
			return true;
		}
		let neighbors = graph[currentNode] || [];
		for (let neighbor of neighbors) {
			if (!visited.has(neighbor)) {
				stack.push(neighbor);
				visited.add(neighbor);
			}
		}
	}
	return false;
}


function findPath(graph, start, end) {
	const stack = [];
	const visited = new Set();

	const cameFrom = {};
	cameFrom[start] = null;

	stack.push(start);
	visited.add(start);

	while (!stack.length == 0) {
		let currentNode = stack.pop();

		if (currentNode == end) {
			//Backtrack through the map to build the path
			const path = [end];
			let node = cameFrom[end];

			while (node != null) {
				path.unshift(node);
				node = cameFrom[node];
			}
			return path;
		}

		let neighbors = graph[currentNode] || [];
		for (let neighbor of neighbors) {
			if (!visited.has(neighbor)) {
				stack.push(neighbor);
				visited.add(neighbor);
				cameFrom[neighbor] = currentNode;				
			}
		}
	}
	return [];
}


const graph = {
	"A" : ["B"],
	"B" : ["C", "A"],
	"C" : ["B", "A"]
}

console.log(hasPath(graph, "A", "C"));
console.log(findPath(graph, "A", "C"));