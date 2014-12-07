function canTravel(room, direction) {
	return !!room[direction] && (!(room[direction] instanceof Door) || room[direction].open);
}

Array.prototype.includes = function(element) {
	return this.indexOf(element) != -1;
}

function isAccessible(origin, destination) {

	return dijkstra(origin)[destination.x][destination.y].dist < Number.MAX_VALUE;

}

function dijkstra(origin) {

	var unvisited = new Array();

	var dist = new Array();
	for(var x=0; x<ROOMS_X; x++){
		dist[x] = new Array();
		for(var y=0; y<ROOMS_Y; y++){
			dist[x][y] = {x:x,y:y,dist:Number.MAX_VALUE,visited:false};
			unvisited.push({x:x, y:y, dist:Number.MAX_VALUE,visited:false});
		}
	}

	dist[origin.x][origin.y].dist = 0;
	
	while (arrayToList(dist).filter(validNode).length > 0){
	
		var node = arrayToList(dist).filter(validNode).sort(function(a,b){return a.dist - b.dist})[0];

		node.visited = true;

		if(canTravel(rooms[node.x][node.y],"n")) {
			var alt = node.dist + 1;
			if(alt < dist[node.x][node.y - 1].dist) {
				dist[node.x][node.y - 1].dist = alt;
			}
		}

		if(canTravel(rooms[node.x][node.y],"e")) {
			var alt = node.dist + 1;
			if(alt < dist[node.x + 1][node.y].dist) {
				dist[node.x + 1][node.y].dist = alt;
			}
		}

		if(canTravel(rooms[node.x][node.y],"s")) {
			var alt = node.dist + 1;
			if(alt < dist[node.x][node.y + 1].dist) {
				dist[node.x][node.y + 1].dist = alt;
			}
		}

		if(canTravel(rooms[node.x][node.y],"w")) {
			var alt = node.dist + 1;
			if(alt < dist[node.x - 1][node.y].dist) {
				dist[node.x - 1][node.y].dist = alt;
			}
		}
	}

	return dist;

}

function validNode(node){return (node.dist < Number.MAX_VALUE && node.visited == false)}

function arrayToList(array, list) {

	list = list || [];
	if(array.length == 0)
		return list;
	else
		return arrayToList(array.slice(1),list.concat(array[0]));

}
