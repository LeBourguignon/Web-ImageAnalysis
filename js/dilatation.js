export function dilatation() {
	const radius = 3; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	const out = new ImageData(imgData.width, imgData.height);
	for (let i = 0; i < imgData.data.length; i += 4) {
		out.data[i] = 0;
		out.data[i + 1] = 0;
		out.data[i + 2] = 0;
		out.data[i + 3] = imgData.data[i + 3];

		for (let j = -radius; j < radius; j++) {
			for (let k = -radius; k < radius; k++) {
				if ((i % canvas.width) + k * 4 >= 0 && (i % canvas.width) + k * 4 < canvas.width) {
					if (i + j * canvas.width + k * 4 >= 0 && i + j * canvas.width + k * 4 < imgData.data.length) {
						if (imgData.data[i + j * canvas.width + k * 4] > 0) {
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
    }
	ctx.putImageData(out, 0, 0);
	console.log("dilatation");
}