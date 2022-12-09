import { dilatation } from "./dilatation.js";
import { erosion } from "./erosion.js";

export function closing() {
    dilatation();
    erosion();
    console.log("Closing done");
}