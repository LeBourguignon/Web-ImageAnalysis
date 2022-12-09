import { dilatation } from "./dilatation.js";
import { erosion } from "./erosion.js";

export function opening() {
    erosion();
    dilatation();
    console.log("Opening done");
}