import { grayscale } from "./grayscale.js";
import { handleFiles, reset } from "./handleFiles.js";
import { thresholding } from "./thresholding.js";
import { dilatation } from "./dilatation.js";
import { erosion } from "./erosion.js";
import { closing } from "./closing.js";
import { opening } from "./opening.js";
import { thinning } from "./thinning.js";
import { thikening } from "./thikening.js";

const input = document.getElementById('input');
input.addEventListener('change', handleFiles);

const buttonGrayscale = document.getElementById('grayscale');
buttonGrayscale.addEventListener('click', grayscale);

const sliderThresholding = document.getElementById("rangeThresholding");
sliderThresholding.addEventListener('input', function() {
	document.getElementById("valueThreshold").innerHTML = sliderThresholding.value;
});

const buttonThresholding = document.getElementById('thresholding');
buttonThresholding.addEventListener('click', thresholding);

const sliderRadius = document.getElementById("rangeRadius");
sliderRadius.addEventListener('input', function() {
	document.getElementById("valueRadius").innerHTML = sliderRadius.value;
});

const buttonDilatation = document.getElementById('dilatation');
buttonDilatation.addEventListener('click', dilatation);

const buttonErosion = document.getElementById('erosion');
buttonErosion.addEventListener('click', erosion);

const buttonClosing = document.getElementById('closing');
buttonClosing.addEventListener('click', closing);

const buttonOpening = document.getElementById('opening');
buttonOpening.addEventListener('click', opening);

const buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', reset);