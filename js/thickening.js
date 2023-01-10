export const L = [
    [255,   255,    255],
    [null,  1,      null],
    [0,     0,      0]
];

export const M = [
    [255,   255,    null],
    [255,   255,    0],
    [null,  0,      0]
];

export function thickeningRot(imgData, structuringElement, out) {
    /*
    for (let i = 0; i < imgData.data.length; i += 4) {
        out.data[i] = 255;
		out.data[i + 1] = 255;
		out.data[i + 2] = 255;
		out.data[i + 3] = imgData.data[i + 3];
        for (let j = -1; j < 2; j++) {
            for (let k = -1; k < 2; k++) {
                if ((i % (imgData.width * 4)) + k * 4 >= 0 && (i % (imgData.width * 4)) + k * 4 < imgData.width * 4) {
					if (imgData.data[i] != 0 && imgData.data[i + j * (imgData.width * 4) + k * 4] != structuringElement[k+1][j+1]) {
                        out.data[i] = 0;
		                out.data[i + 1] = 0;
		                out.data[i + 2] = 0;
                    }
				}
                else {
                    if (0 != structuringElement[k+1][j+1]) {
                        out.data[i] = 0;
		                out.data[i + 1] = 0;
		                out.data[i + 2] = 0;
                    }
                }
            }
        }
    }

    return out;
    */
}

export function thickening(imgData) {
    var out = new ImageData(imgData.width, imgData.height);

    // TODO

    return out;
}

export function showThickening() {
    const radius = document.getElementById("rangeRadius").value; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = thickening(imgData);
    ctx.putImageData(out, 0, 0);
}