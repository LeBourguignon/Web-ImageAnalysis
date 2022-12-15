import { dilatation } from "./dilatation.js";
import { erosion } from "./erosion.js";

export function closing(imgData, radius, log) {
    let out = dilatation(imgData, radius, log);
    out = erosion(imgData, radius, log);
    console.log("Closing done");
    return out;
}

export function showClosing() {
    const radius = document.getElementById("rangeRadius").value; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = closing(imgData, radius, true);
    ctx.putImageData(out, 0, 0);
}