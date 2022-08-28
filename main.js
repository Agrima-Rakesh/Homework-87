var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabic.Image.fromURL(get_image,function(Img){
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_x,
			left:block_y
		});
		canvas.add(block_image_object)
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x = 150;
		canvas.add(rr.png);
		console.log("r");
		window.addEventListener("keydown",my_keydown);
		// upload red ranger
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		canvas.add(gr.png);
		console.log("g");
		window.addEventListener("keydown",my_keydown);
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		canvas.add(yr.png);
		console.log("y");
		window.addEventListener("keydown",my_keydown);
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		canvas.add(pr.png);
		console.log("p");
		window.addEventListener("keydown",my_keydown);
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		canvas.add(br.png);
		console.log("b");
		window.addEventListener("keydown",my_keydown);
	// upload blue ranger
	}
	
}

