import { grayscale } from "./grayscale.js";
import { handleFiles, reset } from "./handleFiles.js";
import { thresholding } from "./thresholding.js";
import { dilatation } from "./dilatation.js";
// import { erosion } from "./erosion.js";

const input = document.getElementById('input');
input.addEventListener('change', handleFiles);

const buttonGrayscale = document.getElementById('grayscale');
buttonGrayscale.addEventListener('click', grayscale);

var sliderThresholding = document.getElementById("rangeThresholding");
sliderThresholding.addEventListener('input', function() {
	document.getElementById("valueThreshold").innerHTML = sliderThresholding.value;
});

const buttonThresholding = document.getElementById('thresholding');
buttonThresholding.addEventListener('click', thresholding);

const buttonDilatation = document.getElementById('dilatation');
buttonDilatation.addEventListener('click', dilatation(3));

// const buttonErosion = document.getElementById('erosion');
// buttonErosion.addEventListener('click', erosion);

