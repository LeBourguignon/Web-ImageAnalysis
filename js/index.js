import { grayscale } from "./grayscale.js";
import { handleFiles } from "./handleFiles.js";
import { thresholding } from "./thresholding.js";

const input = document.getElementById('input');
input.addEventListener('change', handleFiles);

const buttonGrayscale = document.getElementById('grayscale');
buttonGrayscale.addEventListener('click', grayscale);

const buttonThresholding = document.getElementById('thresholding');
buttonThresholding.addEventListener('click', thresholding);