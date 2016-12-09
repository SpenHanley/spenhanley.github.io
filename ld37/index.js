// W = 87
// A = 65
// S = 83
// D = 68
var ctx, can;
var width, height;
var x, y;
var dir = {up:false,down:false,left:false,right:false};
size = 60;
function init()
{
	can = document.getElementById('canvas');
	ctx = can.getContext('2d');
	can.width = window.innerWidth;
	can.height = window.innerHeight;
	width = can.width;
	height = can.height;
	ctx.fillStyle = '#ff0';
	ctx.fillRect(0,0, width, height);
	x = width/2;
	y = height/2;
	requestAnimationFrame(draw, 500);
	window.addEventListener('keydown', keyDown);
	window.addEventListener('keyup', keyUp);
}

// All drawing will be done in here
function draw()
{
	ctx.clearRect(0, 0, width, height);
	ctx.fillStyle = '#0ff';
	ctx.fillRect(x,y,60,60);
	requestAnimationFrame(draw, 500);
	if (dir['up']) y--;
	else if (dir['down']) y++;
	if (dir['left']) x--;
	else if (dir['right']) x++;
//	if (x < 0 && dir['left']) x = width;
//	else if (x > width && dir['right']) x=0-size;
//	if (y < 0 && dir['up']) y = height;
//	else if (y > height && dir['down']) y=0-size;
	if (x < 0) {dir['right']=true; dir['left']=false;}
	else if (x > (width-size)) {dir['left']=true;dir['right']=false;}
	if (y < 0) {dir['down']=true;dir['up']=false;}
	else if (y > (height-size)) {dir['up']=true;dir['down']=false;}
}

function keyUp(e)
{
	if (e.key == 'w' || e.key == 'ArrowUp') {
		dir['up']=true;
		dir['down']=false;
	}
	else if (e.key == 's' || e.key == 'ArrowDown') {
		dir['down']=true;
		dir['up']=false;
	}

	if (e.key == 'a' || e.key == 'ArrowLeft'){
		dir['left']=true;
		dir['right']=false;
	}
	else if (e.key == 'd' || e.key == 'ArrowRight') {
		dir['right']=true;
		dir['left']=false;
	}
	log(dir['up']);
//	log(e);
}
function keyDown(e)
{
//	if (e.key == ['w']) {}
}

function log(i)
{
	console.log(i);
}
