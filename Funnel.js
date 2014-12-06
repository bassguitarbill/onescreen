function Funnel(game,x,y,dir) {
	
	this.game = game;
	this.x = x;
	this.y = y;
	this.dir = dir;
	this.fillStyle = this.fillStyles[dir];

	this.game.rooms[x][y][dir] = this;

}

Funnel.prototype.fillStyles = {e:"rgb(255,0,0)", w:"rgb(0,255,0)", n:"rgb(255,255,0)", s:"rgb(0,255,255)"};

Funnel.prototype.draw = function(ctx) {

	ctx.fillStyle = this.fillStyle;

	var xpos, ypos;

	if (this.dir == "s") {
		xpos = MARGIN + ((this.x + .5)* Room.prototype.WIDTH) + (this.x * Corridor.prototype.horiz.LENGTH) - (Corridor.prototype.vert.WIDTH / 2);
		ypos = MARGIN + ((this.y + 1) * Room.prototype.HEIGHT) + (this.y * Corridor.prototype.vert.LENGTH);
		ctx.fillRect(xpos,ypos,Corridor.prototype.vert.WIDTH,Corridor.prototype.vert.LENGTH);
	} else if(this.dir == "e") {
		xpos = MARGIN + ((this.x + 1) * Room.prototype.WIDTH) + (this.x * Corridor.prototype.horiz.LENGTH);
		ypos = MARGIN + ((this.y + .5)* Room.prototype.HEIGHT) + (this.y * Corridor.prototype.vert.LENGTH) - (Corridor.prototype.horiz.WIDTH / 2);
		ctx.fillRect(xpos,ypos,Corridor.prototype.horiz.LENGTH,Corridor.prototype.horiz.WIDTH);
	} else if(this.dir == "n") {
		xpos = MARGIN + ((this.x + .5)* Room.prototype.WIDTH) + (this.x * Corridor.prototype.horiz.LENGTH) - (Corridor.prototype.vert.WIDTH / 2);
		ypos = MARGIN + (this.y * Room.prototype.HEIGHT) + ((this.y - 1) * Corridor.prototype.vert.LENGTH);
		ctx.fillRect(xpos,ypos,Corridor.prototype.vert.WIDTH,Corridor.prototype.vert.LENGTH);
	} else {
		xpos = MARGIN + (this.x * Room.prototype.WIDTH) + ((this.x - 1) * Corridor.prototype.horiz.LENGTH);
		ypos = MARGIN + ((this.y + .5)* Room.prototype.HEIGHT) + (this.y * Corridor.prototype.vert.LENGTH) - (Corridor.prototype.horiz.WIDTH / 2);
		ctx.fillRect(xpos,ypos,Corridor.prototype.horiz.LENGTH,Corridor.prototype.horiz.WIDTH);
	}
}
