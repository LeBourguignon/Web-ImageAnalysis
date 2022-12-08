import { grayscale } from "./grayscale.js";
import { handleFiles, reset } from "./handleFiles.js";
import { thresholding } from "./thresholding.js";
import { dilatation } from "./dilatation.js";
import { erosion } from "./erosion.js";

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

const sliderDilatation = document.getElementById("rangeDilatation");
sliderDilatation.addEventListener('input', function() {
	document.getElementById("valueDilatation").innerHTML = sliderDilatation.value;
});

const buttonDilatation = document.getElementById('dilatation');
buttonDilatation.addEventListener('click', dilatation);

const sliderErosion = document.getElementById("rangeErosion");
sliderErosion.addEventListener('input', function() {
	document.getElementById("valueErosion").innerHTML = sliderErosion.value;
});

const buttonErosion = document.getElementById('erosion');
buttonErosion.addEventListener('click', erosion);

const buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', reset);