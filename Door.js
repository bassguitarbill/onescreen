function Door(game,x,y,o) {
   
	this.game = game;
	this.x = x;
	this.y = y;
	this.o = o;

	this.open = true;

	
	if (this.o == "vert"){
		if(this.game.rooms[x][y] && this.game.rooms[x][y+1]){
			this.game.rooms[x][y].s = this;
			this.game.rooms[x][y+1].n = this;
		}
	} else {
		if(this.game.rooms[x][y] && this.game.rooms[x+1][y]){
			this.game.rooms[x][y].e = this;
			this.game.rooms[x+1][y].w = this;
		}
	}

}

Door.prototype.images = {horiz:{closed:new Image(), open:new Image()}, vert:{closed:new Image(), open:new Image()}};
Door.prototype.images.horiz.closed.src = "images/doorHorizClosed.png";
Door.prototype.images.horiz.open.src = "images/doorHorizOpen.png";
Door.prototype.images.vert.closed.src = "images/doorVertClosed.png";
Door.prototype.images.vert.open.src = "images/doorVertOpen.png";

Door.prototype.draw = function(ctx) {


	ctx.fillStyle = this.fillStyle;

	var xpos, ypos;

	if (this.o == "vert") {
		xpos = MARGIN + ((this.x + .5)* Room.prototype.WIDTH) + (this.x * Corridor.prototype.horiz.LENGTH) - (Corridor.prototype.vert.WIDTH / 2);
		ypos = MARGIN + ((this.y + 1) * Room.prototype.HEIGHT) + (this.y * Corridor.prototype.vert.LENGTH);
		ctx.fillRect(xpos,ypos,Corridor.prototype.vert.WIDTH,Corridor.prototype.vert.LENGTH);
		ctx.drawImage(this.open?this.images.vert.open:this.images.vert.closed,xpos,ypos);
	} else {
		xpos = MARGIN + ((this.x + 1) * Room.prototype.WIDTH) + (this.x * Corridor.prototype.horiz.LENGTH);
		ypos = MARGIN + ((this.y + .5)* Room.prototype.HEIGHT) + (this.y * Corridor.prototype.vert.LENGTH) - (Corridor.prototype.horiz.WIDTH / 2);
		ctx.fillRect(xpos,ypos,Corridor.prototype.horiz.LENGTH,Corridor.prototype.horiz.WIDTH);
		ctx.drawImage(this.open?this.images.horiz.open:this.images.horiz.closed,xpos,ypos);
	}

	//console.log(xpos, ypos);
}

