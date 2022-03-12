const imagesID = document.getElementById('images');
const imgArray = [1, 3, 5,3, 23, 53,32];
let imgIndexNumber = 0;
setInterval(() => {
    imgIndexNumber++;
    imagesID.setAttribute('src', imgArray[imgIndexNumber]);
    if(imgIndexNumber >= imgArray.length){
        imgIndexNumber = 0;
    }
    console.log(imgIndexNumber);
}, 2000);