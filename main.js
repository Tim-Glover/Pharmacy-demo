
var i = 0;// The start of my array of images for my slide show
var images = [];
var time = 3000;

images[0] = 'images/book.jpg';
images[1] = "images/iv.webp";
images[2] = 'images/math.webp';
images[3] = "images/pills.webp";

function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;

    }
    setTimeout('changeImg()', time);

}

window.onload = changeImg;
