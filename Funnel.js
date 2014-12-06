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

	Corridor.prototype.draw.call(this, ctx);

}
