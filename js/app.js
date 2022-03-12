const imagesID = document.getElementById('images');
const imgArray = [ 
'images/img5.jpg',
'images/img2.jpg',
'images/img3.jpg',
'images/img4.jpg',
'images/img6.jpg',
'images/img.jpg',
];
let imgIndexNumber = 0;
setInterval(() => {
    if(imgIndexNumber >= imgArray.length){
        imgIndexNumber = 0;
    }
    imagesID.setAttribute('src', imgArray[imgIndexNumber]);
    imgIndexNumber++;
}, 1500);