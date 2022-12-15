import { dilatation } from "./dilatation.js";
import { erosion } from "./erosion.js";

export function opening(imgData, radius, log) {
    let out = erosion(imgData, radius, log);
    out = dilatation(out, radius, log);
    if(log) console.log("Opening done");
    return out;
}

export function showOpening() {
    const radius = document.getElementById("rangeRadius").value; 
	const ctx = document.getElementById('canvas').getContext('2d');
    const imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const out = opening(imgData, radius, true);
    ctx.putImageData(out, 0, 0);
}