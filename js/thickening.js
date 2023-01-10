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

export function thickeningRot(img, structuringElement, out) {
    
    // TODO

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