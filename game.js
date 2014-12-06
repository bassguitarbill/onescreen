window.onload = function() {
	canvas = document.getElementById("screen");
	ctx = canvas.getContext("2d");

	MARGIN = 0;

	ROOMS_X = 10;
	ROOMS_Y = 10;

	startTime = new Date();

	canvas.addEventListener('click',click,false);

	game = {};
	game.rooms = initializeRooms();
	//randomizeRooms();

	setInterval(function() {
		draw(ctx);
	}, 1000/60);


}

choices = [];
scareFromRoom = null;

function click(e) {

	var x = e.x - canvas.offsetLeft;
	var y = e.y - canvas.offsetTop;
	
	console.log(e);

	if(choices.length > 1) {
		var clickedInRoomX = (x % (Room.prototype.WIDTH + Corridor.prototype.horiz.LENGTH) < Room.prototype.WIDTH) ? Math.floor(x / (Room.prototype.WIDTH + Corridor.prototype.horiz.LENGTH)) : -1;
		var clickedInRoomY = (y % (Room.prototype.HEIGHT + Corridor.prototype.vert.LENGTH) < Room.prototype.HEIGHT) ? Math.floor(y / (Room.prototype.HEIGHT + Corridor.prototype.vert.LENGTH)) : -1;
		var destination = choices.filter(function(node){return (clickedInRoomX == node.x) && (clickedInRoomY == node.y)});
		if(destination.length > 0)
			scare(rooms[scareFromRoom.x][scareFromRoom.y],choices.indexOf(destination[0]));

		clearChoices();
	} else {
		var actions = document.getElementsByName("action");
		var action;
		for(var a=0; a<actions.length; a++){
			if(actions[a].checked)
				action = actions[a].value;
		}

		var clickedInRoomX = (x % (Room.prototype.WIDTH + Corridor.prototype.horiz.LENGTH) < Room.prototype.WIDTH) ? Math.floor(x / (Room.prototype.WIDTH + Corridor.prototype.horiz.LENGTH)) : -1;
		var clickedInRoomY = (y % (Room.prototype.HEIGHT + Corridor.prototype.vert.LENGTH) < Room.prototype.HEIGHT) ? Math.floor(y / (Room.prototype.HEIGHT + Corridor.prototype.vert.LENGTH)) : -1;

		if(clickedInRoomX > -1 && clickedInRoomY > -1){
			switch(action) {
				case "snare":
					snare(rooms[clickedInRoomX][clickedInRoomY]);
					break;
				case "scare":
					scare(rooms[clickedInRoomX][clickedInRoomY]);
					break;
				case "split":
					split(rooms[clickedInRoomX][clickedInRoomY]);
					break;
			}
		} else {
			console.log("Bzz! Bad click!");
		}

	}
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
	
	if(choices.length > 0){
		ctx.globalAlpha = 0.8;
		ctx.fillStyle = "rgb(255,255,0)";
		for(var i=0; i<choices.length; i++){
						
			var xpos = MARGIN + (choices[i].x * (Room.prototype.WIDTH + Corridor.prototype.horiz.LENGTH));
			var ypos = MARGIN + (choices[i].y * (Room.prototype.HEIGHT + Corridor.prototype.vert.LENGTH));
	
			ctx.fillRect(xpos,ypos,Room.prototype.WIDTH,Room.prototype.HEIGHT);

		}
	}
}




