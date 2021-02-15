// create arr of images and grab img that will be changing 
let imgArr = ['/images/borderlandsthree.jpg','/images/overwatch.jpg','/images/modernwarfare.jpg'];

let image = document.getElementById('carousel_image');

let i = 0;

function prev() {
    if(i <= 0) i = imgArr.length;
    i--;
    return setImg();
}

function next() {
    if (i >= imgArr.length -1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return image.setAttribute('src',imgArr[i]);
}