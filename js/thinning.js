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

export function thinningRot(img, structuringElement, out) {
    for (let i = 0; i < img.data.length; i += 4) {
        out.data[i] = img.data[i];
		out.data[i + 1] = img.data[i + 1];
		out.data[i + 2] = img.data[i + 2];
		out.data[i + 3] = img.data[i + 3];
        
        if (out.data[i] == structuringElement[1][1]) {
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    if ((i % (img.width * 4)) + k * 4 >= 0 && (i % (img.width * 4)) + k * 4 < img.width * 4 && (i + j * (img.width * 4) + k * 4) >= 0 && (i + j * (img.width * 4) + k * 4) < img.data.length) {
                        if (img.data[i] != 0 && (img.data[i + j * (img.width * 4) + k * 4] != structuringElement[j+1][k+1] || structuringElement[j+1][k+1] == null)) {
                            out.data[i] = 0;
                            out.data[i + 1] = 0;
                            out.data[i + 2] = 0;
                        }
                        // console.log({x: (i / 4) % (img.width), y: (i / 4) / (img.width)}, img.data[i], "Dans l'image", {x: (i / 4) % (img.width) + k, y: (i / 4) / (img.width) + j}, img.data[i + j * (img.width * 4) + k * 4], structuringElement[j+1][k+1]);
                    }
                    else {
                        if (0 != structuringElement[j+1][k+1] || structuringElement[j+1][k+1] == null) {
                            out.data[i] = 0;
                            out.data[i + 1] = 0;
                            out.data[i + 2] = 0;
                        }
                        // console.log({x: (i / 4) % (img.width), y: (i / 4) / (img.width)}, img.data[i], "Hors image", {x: (i / 4) % (img.width) + k, y: (i / 4) / (img.width) + j}, img.data[i + j * (img.width * 4) + k * 4], structuringElement[j+1][k+1]);
                    }
                }
            }
        }
    }

    return out;
}

export function thinning(img) {
    let localL = L;
    let localM = M;

    var out = new ImageData(img.width, img.height);

    out = thinningRot(img, localL, out);
    out = thinningRot(img, localM, out);
    localL = localL[0].map((value, index) => localL.map(row => row[row.length-1-index]));
    localM = localM[0].map((value, index) => localM.map(row => row[row.length-1-index]));
    out = thinningRot(img, localL, out);
    out = thinningRot(img, localM, out);
    localL = localL[0].map((value, index) => localL.map(row => row[row.length-1-index]));
    localM = localM[0].map((value, index) => localM.map(row => row[row.length-1-index]));
    out = thinningRot(img, localL, out);
    out = thinningRot(img, localM, out);
    localL = localL[0].map((value, index) => localL.map(row => row[row.length-1-index]));
    localM = localM[0].map((value, index) => localM.map(row => row[row.length-1-index]));
    out = thinningRot(img, localL, out);
    out = thinningRot(img, localM, out);

    return out;
}

export function showThinning() {
    const radius = document.getElementById("rangeRadius").value; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = thinning(img);
    ctx.putImageData(out, 0, 0);
}