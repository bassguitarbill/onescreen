function Puzzle(game, createString) {
	// R,0,0,2 R,1,0,0 C,0,0,h
	
	var entities = createString.split(" ");
	for(var i=0; i<entities.length; i++) {
		var command = entities[i].split(",");

		switch (command[0]) {
			case "B":
				new Room(game,Number(command[1]),Number(command[2]),Number(command[3]),true);
				break;
			case "R":
				new Room(game,Number(command[1]),Number(command[2]),Number(command[3]),false);
				break;
			case "C":
				new Corridor(game,Number(command[1]),Number(command[2]),command[3]);
				break;
			case "F":
				new Funnel(game,Number(command[1]),Number(command[2]),command[3]);
				break;
			case "D":
				new Door(game,Number(command[1]),Number(command[2]),command[3]);
				break;
			default:
				console.log("Unrecognized command: ", entities[i]);
				break;
		}
	}

	checker = setInterval(this.checkSolved, 1000/60);
}

Puzzle.prototype.checkSolved = function() {
	
	if(arrayToList(this.game.rooms).filter(function(node){return ((node.count > 1) || (node.banned && node.count > 0))}).length == 0){
		console.log('You solved it!');
		clearInterval(checker);
	}

}
