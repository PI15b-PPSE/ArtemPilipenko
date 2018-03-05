//сам канвас (логический)
var field=document.getElementById('canvas');
//позволяет рисовать по канвасу
var context = field.getContext('2d');

var image = new Image();
image.src = '../images/maps/map1.png';
 
image.onload = function () {
    context.drawImage(image, 0, 0);
};
 
var imageCar = new Image();
imageCar.src = '../images/cars/1/car.png';

imageCar.onload = function () {
    context.drawImage(imageCar, 0, 130);
};