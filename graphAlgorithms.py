from collections import deque

def depthFirstSearch(graph, start):
	#Have a list to keep track of where to go next
	toVisit = deque()

	#A set to keep track of where you've already been
	visited = set()

	toVisit.append(start)
	visited.add(start)

	while (not len(toVisit) == 0):
		currentNode = toVisit.pop()
		print(currentNode)
		neighbors = graph[currentNode]

		for neighbor in neighbors:
			if (not neighbor in visited):
				toVisit.append(neighbor)
				visited.add(neighbor);

def breadthFirstSearch(graph, start):
	#Have a list to keep track of where to go next
	toVisit = deque()

	#A set to keep track of where you've already been
	visited = set()

	toVisit.appendleft(start)
	visited.add(start)

	while (not len(toVisit) == 0):
		currentNode = toVisit.pop()
		print(currentNode)
		neighbors = graph[currentNode]

		for neighbor in neighbors:
			if (not neighbor in visited):
				toVisit.appendleft(neighbor)
				visited.add(neighbor);

#Example graph
flights = {};
flights['ATL'] = ['NYC', 'LA'];
flights['NYC'] = ['ATL', 'LA'];
flights['LA'] = ['ATL'];

#I expect: ATL, LA, NYC
print("Depth-First Search");
depthFirstSearch(flights, 'ATL');


print("=================");

#I expect: ATL, NYC, LA
print("Breadth-First Search");
breadthFirstSearch(flights, 'ATL');
