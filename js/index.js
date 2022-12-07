const input = document.getElementById('input');
input.addEventListener('change', handleFiles);

function handleFiles(e) {
    const ctx = document.getElementById('canvas').getContext('2d');
    const img = new Image;
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function() {
        ctx.canvas.width = img.width;
        ctx.canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
    }
}

const buttonGrayscale = document.getElementById('grayscale');
buttonGrayscale.addEventListener('click', grayscale);

function grayscale() {
    const ctx = document.getElementById('canvas').getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < imgData.data.length; i += 4) {
        let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
        let colour = count / 3;
    
        imgData.data[i] = colour;       // r
        imgData.data[i + 1] = colour;   // g
        imgData.data[i + 2] = colour;   // b
        //imgData.data[i + 3] = 255;    // a
    }
    ctx.putImageData(imgData, 0, 0);
}

const buttonThresholding = document.getElementById('thresholding');
buttonThresholding.addEventListener('click', thresholding);

function thresholding(threshold) {
    const ctx = document.getElementById('canvas').getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < imgData.data.length; i += 4) {
        let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];

        let colour = 0;
        if (count / 3 > 128) {
            colour = 255;
        }

        imgData.data[i] = colour;       // r
        imgData.data[i + 1] = colour;   // g
        imgData.data[i + 2] = colour;   // b
        //imgData.data[i + 3] = 255;    // a
    }
    ctx.putImageData(imgData, 0, 0);
}
