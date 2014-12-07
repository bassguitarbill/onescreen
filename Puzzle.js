function Puzzle(game, createString, description) {
	
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

currentPuzzle = null;
nextPuzzleIndex = 0;

function startPuzzle(game,i) {


	if(!puzzles[i]){
		alert("Invalid puzzle ID");
		console.log("Invalid puzzle ID");
		return;
	}

	if(!puzzles[i].u){
		alert("Puzzle not yet unlocked");
		console.log("Puzzle not yet unlocked");
		return;
	}

	if(puzzles[nextPuzzleIndex] == currentPuzzle){
		alert("Already playing that puzzle");
		console.log("Already playing that puzzle");
		return;
	}
	
	new Puzzle(game,puzzles[i].s,puzzles[i].d);
	currentPuzzle = puzzles[i];
}

Puzzle.prototype.checkSolved = function() {
	
	if(arrayToList(this.game.rooms).filter(function(node){return ((node.count > 1) || (node.banned && node.count > 0))}).length == 0){
		alert("You solved it!");
		console.log('You solved it!');
		if(puzzles[currentPuzzle.i + 1])
			puzzles[currentPuzzle.i + 1].u = true;
		
		nextPuzzleIndex = nextPuzzleIndex + 1;
		clearInterval(checker);
	}

}

puzzles = [];
puzzles.push({s:"B,0,0,1 R,1,0,0 C,0,0,horiz",d:"Mice can't occupy banned squares. Snare it to the open room."});
puzzles.push({s:"R,0,1,0 B,1,1,0 B,2,1,1 C,0,1,horiz C,1,1,horiz",d:"Scared mice will run from their square to the furthest available one"});
puzzles.push({s:"R,0,2,3 R,1,2,0 R,0,3,0 C,0,2,horiz C,0,2,vert"});
puzzles.push({s:"R,1,3,0 B,1,4,1 R,2,4,0 B,2,3,1 F,1,4,n C,1,4,horiz C,2,3,vert"});
puzzles.push({s:"B,0,4,2 R,0,5,0 R,0,6,0 R,0,7,0 R,1,5,0 R,1,6,0 R,1,7,0 D,0,4,vert D,0,5,vert C,0,6,vert D,0,5,horiz D,1,5,vert C,1,6,vert"});

puzzles.map(function(node){node.u = false; node.i = puzzles.indexOf(node); return node;})
puzzles[0].u = true;
