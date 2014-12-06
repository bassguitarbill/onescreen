function Funnel(game,x,y,dir) {
	
	this.game = game;
	this.x = x;
	this.y = y;
	this.dir = dir;
	//this.fillStyle = this.fillStyles[dir];
	this.fillStyle = Corridor.prototype.fillStyle;
	this.game.rooms[x][y][dir] = this;

}

Funnel.prototype.fillStyles = {e:"rgb(255,0,0)", w:"rgb(0,255,0)", n:"rgb(255,255,0)", s:"rgb(0,255,255)"};
Funnel.prototype.image = {e:new Image(), w:new Image(), n:new Image(), s:new Image()};
Funnel.prototype.image.e.src = "images/funnelRight.png";
Funnel.prototype.image.w.src = "images/funnelLeft.png";
Funnel.prototype.image.n.src = "images/funnelUp.png";
Funnel.prototype.image.s.src = "images/funnelDown.png";

Funnel.prototype.draw = function(ctx) {

	ctx.fillStyle = this.fillStyle;

	var xpos, ypos;

	if (this.dir == "s") {
		xpos = ((this.x + .5)* Room.prototype.WIDTH) + (this.x * Corridor.prototype.horiz.LENGTH) - (Corridor.prototype.vert.WIDTH / 2);
		ypos = ((this.y + 1) * Room.prototype.HEIGHT) + (this.y * Corridor.prototype.vert.LENGTH);
		ctx.fillRect(xpos,ypos,Corridor.prototype.vert.WIDTH,Corridor.prototype.vert.LENGTH);
	} else if(this.dir == "e") {
		xpos = ((this.x + 1) * Room.prototype.WIDTH) + (this.x * Corridor.prototype.horiz.LENGTH);
		ypos = ((this.y + .5)* Room.prototype.HEIGHT) + (this.y * Corridor.prototype.vert.LENGTH) - (Corridor.prototype.horiz.WIDTH / 2);
		ctx.fillRect(xpos,ypos,Corridor.prototype.horiz.LENGTH,Corridor.prototype.horiz.WIDTH);
	} else if(this.dir == "n") {
		xpos = ((this.x + .5)* Room.prototype.WIDTH) + (this.x * Corridor.prototype.horiz.LENGTH) - (Corridor.prototype.vert.WIDTH / 2);
		ypos = (this.y * Room.prototype.HEIGHT) + ((this.y - 1) * Corridor.prototype.vert.LENGTH);
		ctx.fillRect(xpos,ypos,Corridor.prototype.vert.WIDTH,Corridor.prototype.vert.LENGTH);
	} else {
		xpos = (this.x * Room.prototype.WIDTH) + ((this.x - 1) * Corridor.prototype.horiz.LENGTH);
		ypos = ((this.y + .5)* Room.prototype.HEIGHT) + (this.y * Corridor.prototype.vert.LENGTH) - (Corridor.prototype.horiz.WIDTH / 2);
		ctx.fillRect(xpos,ypos,Corridor.prototype.horiz.LENGTH,Corridor.prototype.horiz.WIDTH);
	}

	ctx.drawImage(this.image[this.dir],xpos,ypos);
}

function drawRotatedImage(ctx,image,x,y,angle) {
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(angle);
	ctx.drawImage(image,0,-Corridor.prototype.horiz.WIDTH);
	ctx.restore();
}
