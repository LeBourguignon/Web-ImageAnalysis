let currentImage = null;

function drawImageScaled(img, ctx) {
    var canvas = ctx.canvas ;
    var hRatio = canvas.width  / img.width    ;
    var vRatio =  canvas.height / img.height  ;
    var ratio  = Math.min ( hRatio, vRatio );
    var centerShift_x = ( canvas.width - img.width*ratio ) / 2;
    var centerShift_y = ( canvas.height - img.height*ratio ) / 2;  
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(img, 0,0, img.width, img.height,
                       centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);  
 }
 
export function handleFiles(e) {
    const ctx = document.getElementById('canvas').getContext('2d');
    const img = new Image;
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function() {
		currentImage = img;
        // ctx.canvas.width = img.width;
        // ctx.canvas.height = img.height;
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // ctx.drawImage(img, 0, 0);
        drawImageScaled(img, ctx);
    }
}

export function reset() {
	const ctx = document.getElementById('canvas').getContext('2d');
	ctx.canvas.width = currentImage.width;
	ctx.canvas.height = currentImage.height;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(currentImage, 0, 0);
}