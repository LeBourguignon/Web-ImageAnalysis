export function dilatation(imgData, radius, log = false) {
	const out = new ImageData(imgData.width, imgData.height);
	
	for (let i = 0; i < imgData.data.length; i += 4) {
		if(log) console.log((i)/imgData.data.length);

		out.data[i] = 0;
		out.data[i + 1] = 0;
		out.data[i + 2] = 0;
		out.data[i + 3] = imgData.data[i + 3];

		for (let j = -radius; j <= radius; j++) {
			for (let k = -radius; k <= radius; k++) {
				if ((i % (imgData.width * 4)) + k * 4 >= 0 && (i % (imgData.width * 4)) + k * 4 < imgData.width * 4) {
					if (imgData.data[i + j * (imgData.width * 4) + k * 4] > 0) {
						out.data[i] = 255;
						out.data[i + 1] = 255;
						out.data[i + 2] = 255;
						
						j = radius;
						k = radius;
					}
				}
			}
		}
    }
	if(log) console.log("Dilatation done");
	return out;
}

export function showDilatation() {
	const radius = document.getElementById("rangeRadius").value; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = dilatation(imgData, radius, true);
    ctx.putImageData(out, 0, 0);
}