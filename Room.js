function Room(x, y) {

	this.x = x;
	this.y = y;

}

Room.prototype.HEIGHT = 50;
Room.prototype.WIDTH = 50;

Room.prototype.fillStyle = "rgb(180,180,180)";

Room.prototype.draw = function(ctx) {

	// Margin + rooms before it*height/width + corridors before it*corrSize
	var xpos = MARGIN + (this.x * (Room.prototype.WIDTH + Corridor.prototype.horiz.LENGTH));
	var ypos = MARGIN + (this.y * (Room.prototype.HEIGHT + Corridor.prototype.vert.LENGTH));
	
	ctx.fillStyle = Room.prototype.fillStyle;
	ctx.fillRect(xpos,ypos,Room.prototype.WIDTH,Room.prototype.HEIGHT);

	console.log(xpos, ypos);
}


