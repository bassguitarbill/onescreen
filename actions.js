function scare(room, choice) {

	console.log("scare:",arguments);

	if(!room)
		return;

	var accessibleNodes = arrayToList(dijkstra(room)).filter(function(node){return node.dist < Number.MAX_VALUE});

	if(accessibleNodes.length == 1)
		return;

	var maxDist = accessibleNodes.sort(function(a,b){return b.dist - a.dist})[0].dist;

	var farthestNodes = accessibleNodes.filter(function(node){return node.dist == maxDist});
	if(farthestNodes.length > 1 && (typeof choice === "undefined" || choice > (farthestNodes.length - 1))){
		console.log("Multiple farthest nodes. Length = ",farthestNodes.length);
		setChoices(farthestNodes,room);
	}else{
		choice = choice || 0;
		var farthestNode = farthestNodes[choice];
		rooms[farthestNode.x][farthestNode.y].count = rooms[farthestNode.x][farthestNode.y].count + room.count;
		room.count = 0;
	}
}

function snare(room) {

	console.log("snare:",arguments);

	if(!room)
		return;

	// SUPER NAIVE, I HATE THIS AS MUCH AS YOU DO
	
	var roomsThatCanReach = arrayToList(rooms).filter(function(node){return isAccessible(node,room)});
	var count = 0;
	for(var i=0; i<roomsThatCanReach.length; i++) {
		count = count + roomsThatCanReach[i].count;
		roomsThatCanReach[i].count = 0;
	}

	room.count = count;
}

function split(room) {

	console.log("split:",arguments);

	if(!room)
		return;
 
	var accessibleNodes = arrayToList(dijkstra(room)).filter(function(node){return node.dist < Number.MAX_VALUE});

	var count = room.count;
	room.count = count % accessibleNodes.length;
	for(var i=0; i<accessibleNodes.length; i++) {
		var node = accessibleNodes[i];
		var toRoom = rooms[node.x][node.y];
		toRoom.count = toRoom.count + Math.floor(count / accessibleNodes.length);
	}

}

function setChoices(nodes, room) {

	choices = nodes;
	scareFromRoom = room;

}

function clearChoices() {

	choices = [];

}
