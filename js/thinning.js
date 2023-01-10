export const L = [
    [255,   255,    255],
    [null,  255,      null],
    [0,     0,      0]
];

export const M = [
    [255,   255,    null],
    [255,   255,    0],
    [null,  0,      0]
];

export function thinningRot(imgData, structuringElement, out) {
    for (let i = 0; i < imgData.data.length; i += 4) {
        out.data[i] = 255;
		out.data[i + 1] = 255;
		out.data[i + 2] = 255;
		out.data[i + 3] = imgData.data[i + 3];
        
        for (let j = -1; j < 2; j++) {
            for (let k = -1; k < 2; k++) {
                if ((i % (imgData.width * 4)) + k * 4 >= 0 && (i % (imgData.width * 4)) + k * 4 < imgData.width * 4 && (i + j * (imgData.width * 4) + k * 4) >= 0 && (i + j * (imgData.width * 4) + k * 4) < imgData.data.length) {
					if (imgData.data[i] != 0 && (imgData.data[i + j * (imgData.width * 4) + k * 4] != structuringElement[j+1][k+1] || structuringElement[j+1][k+1] == null)) {
                        out.data[i] = 0;
		                out.data[i + 1] = 0;
		                out.data[i + 2] = 0;
                    }
                    //console.log({x: (i / 4) % (imgData.width), y: (i / 4) / (imgData.width)}, imgData.data[i], "Dans l'image", {x: (i / 4) % (imgData.width) + k, y: (i / 4) / (imgData.width) + j}, imgData.data[i + j * (imgData.width * 4) + k * 4], structuringElement[j+1][k+1]);
				}
                else {
                    if (0 != structuringElement[j+1][k+1] || structuringElement[j+1][k+1] == null) {
                        out.data[i] = 0;
		                out.data[i + 1] = 0;
		                out.data[i + 2] = 0;
                    }
                    //console.log({x: (i / 4) % (imgData.width), y: (i / 4) / (imgData.width)}, imgData.data[i], "Hors image", {x: (i / 4) % (imgData.width) + k, y: (i / 4) / (imgData.width) + j}, imgData.data[i + j * (imgData.width * 4) + k * 4], structuringElement[j+1][k+1]);
                }
            }
        }
    }

    return out;
}

export function thinning(imgData) {
    let localL = L;
    let localM = M;

    var out = new ImageData(imgData.width, imgData.height);

    out = thinningRot(imgData, localL, out);
    out = thinningRot(imgData, localM, out);
    localL = localL[0].map((value, index) => localL.map(row => row[row.length-1-index]));
    localM = localM[0].map((value, index) => localM.map(row => row[row.length-1-index]));
    out = thinningRot(imgData, localL, out);
    out = thinningRot(imgData, localM, out);
    localL = localL[0].map((value, index) => localL.map(row => row[row.length-1-index]));
    localM = localM[0].map((value, index) => localM.map(row => row[row.length-1-index]));
    out = thinningRot(imgData, localL, out);
    out = thinningRot(imgData, localM, out);
    localL = localL[0].map((value, index) => localL.map(row => row[row.length-1-index]));
    localM = localM[0].map((value, index) => localM.map(row => row[row.length-1-index]));
    out = thinningRot(imgData, localL, out);
    out = thinningRot(imgData, localM, out);

    return out;
}

export function showThinning() {
    const radius = document.getElementById("rangeRadius").value; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = thinning(imgData);
    ctx.putImageData(out, 0, 0);
}