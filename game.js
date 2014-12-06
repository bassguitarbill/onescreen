window.onload = function() {
	canvas = document.getElementById("screen");
	ctx = canvas.getContext("2d");

	MARGIN = 10;

	ROOMS_X = 10;
	ROOMS_Y = 10;

	startTime = new Date();


	game = {};
	game.rooms = initializeRooms();
	//randomizeRooms();

	setInterval(function() {
		draw(ctx);
	}, 1000/60);

}

function start() {
	new Puzzle(game, "R,0,0,2 R,1,0,0 C,0,0,horiz");
}

function getTime() {
	return new Date() - startTime;
}

function initializeRooms() {
	rooms = new Array(ROOMS_X);
	for(var x=0; x<ROOMS_X; x++){
		rooms[x] = new Array(ROOMS_Y);
	}
	return rooms;
}

function randomizeRooms() {

	for(var x=0; x<ROOMS_X; x++){
		for(var y=0; y<ROOMS_Y; y++){
			if (Math.random() < .95){
				new Room(game,x,y);
			}
		}
	}

	for(var x=0; x<ROOMS_X; x++){
		for(var y=0; y<ROOMS_Y; y++){
			if (Math.random() < .75){
				try{
					new Corridor(game,x,y,"horiz");
				} catch (x){}
			}
			if(Math.random() < .75) {
				try{
					new Corridor(game,x,y,"vert");
				} catch (x){}
			}
		}
	}
}

function draw(ctx) {

	ctx.fillStyle = "rgb(60,60,60)";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	for(var x=0; x<ROOMS_X; x++){
		for(var y=0; y<ROOMS_Y; y++){
			if(rooms[x][y]){
				rooms[x][y].draw(ctx);
			}
		}
	}
}
