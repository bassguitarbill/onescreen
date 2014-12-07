function Room(game, x, y, count, banned) {

	this.game = game;
	this.x = x;
	this.y = y;

	this.count = count || 0;

	this.game.rooms[x][y] = this;

	this.banned = banned || false;
}

Room.prototype.bannedImage = new Image();
Room.prototype.bannedImage.src = 'images/banned.png';

Room.prototype.HEIGHT = 50;
Room.prototype.WIDTH = 50;

Room.prototype.fillStyle = "rgb(180,180,180)";

Room.prototype.draw = function(ctx) {

	// Margin + rooms before it*height/width + corridors before it*corrSize
	var xpos = MARGIN + (this.x * (Room.prototype.WIDTH + Corridor.prototype.horiz.LENGTH));
	var ypos = MARGIN + (this.y * (Room.prototype.HEIGHT + Corridor.prototype.vert.LENGTH));
	
	ctx.fillStyle = Room.prototype.fillStyle;
	ctx.fillRect(xpos,ypos,Room.prototype.WIDTH,Room.prototype.HEIGHT);

	if(this.e)
		this.e.draw(ctx);

	if(this.n)
		this.n.draw(ctx);

	if(this.w && !(this.w instanceof Corridor))
		this.w.draw(ctx);

	if(this.s && !(this.s instanceof Corridor))
		this.s.draw(ctx);

	if(this.banned){
		ctx.globalAlpha = Math.abs((getTime() % 1000) - 500) / 500;
		ctx.drawImage(this.bannedImage, xpos, ypos);
		ctx.globalAlpha = 1.0;

	}

	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText(this.count,xpos + MARGIN,ypos + Room.prototype.HEIGHT - MARGIN);
	ctx.fillStyle = Room.prototype.fillStyle;

	//console.log(xpos, ypos);
}


