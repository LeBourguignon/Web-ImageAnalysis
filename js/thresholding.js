export function thresholding(threshold) {
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