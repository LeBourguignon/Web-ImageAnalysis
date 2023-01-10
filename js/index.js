import { grayscale } from "./grayscale.js";
import { handleFiles, reset } from "./handleFiles.js";
import { thresholding } from "./thresholding.js";
import { showDilatation } from "./dilatation.js";
import { showErosion } from "./erosion.js";
import { showClosing } from "./closing.js";
import { showOpening } from "./opening.js";
import { showThinning } from "./thinning.js";
import { showThickening } from "./thickening.js";

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
buttonDilatation.addEventListener('click', showDilatation);

const buttonErosion = document.getElementById('erosion');
buttonErosion.addEventListener('click', showErosion);

const buttonClosing = document.getElementById('closing');
buttonClosing.addEventListener('click', showClosing);

const buttonOpening = document.getElementById('opening');
buttonOpening.addEventListener('click', showOpening);

const buttonThinning = document.getElementById('thinning');
buttonThinning.addEventListener('click', showThinning);

const buttonThickening = document.getElementById('thickening');
buttonThickening.addEventListener('click', showThickening);

const buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', reset);