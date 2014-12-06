function Corridor(x,y,o) {

	this.x = x;
	this.y = y;
	this.o = o;

}	

Corridor.prototype.vert = {LENGTH:20 , WIDTH:15};
Corridor.prototype.horiz = {LENGTH:20 , WIDTH:15};

Corridor.prototype.fillStyle = "rgb(180,180,180)";

Corridor.prototype.draw = function(ctx){
	
	ctx.fillStyle = Corridor.prototype.fillStyle;

	var xpos, ypos;

	if (this.o == "vert") {
		xpos = MARGIN + ((this.y + .5)* Room.prototype.WIDTH) - (Corridor.prototype.vert.WIDTH / 2);
		ypos = MARGIN + ((this.x + 1) * Room.prototype.HEIGHT) + (this.x * Corridor.prototype.vert.LENGTH);
		ctx.fillRect(xpos,ypos,Corridor.prototype.vert.WIDTH,Corridor.prototype.vert.LENGTH);
	} else {
		xpos = MARGIN + ((this.x + 1) * Room.prototype.WIDTH) + (this.x * Corridor.prototype.horiz.LENGTH);
		ypos = MARGIN + ((this.y + .5)* Room.prototype.HEIGHT) - (Corridor.prototype.horiz.WIDTH / 2);
		ctx.fillRect(xpos,ypos,Corridor.prototype.horiz.LENGTH,Corridor.prototype.horiz.WIDTH);
	}

	//console.log(xpos, ypos);
}
