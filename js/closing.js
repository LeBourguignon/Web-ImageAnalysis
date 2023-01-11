import { dilatation } from "./dilatation.js";
import { erosion } from "./erosion.js";

export function closing(img, radius, log = false) {
    let out = dilatation(img, radius, log);
    out = erosion(img, radius, log);
    console.log("Closing done");
    return out;
}

export function showClosing() {
    const radius = document.getElementById("rangeRadius").value; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = closing(img, radius, true);
    ctx.putImageData(out, 0, 0);
}