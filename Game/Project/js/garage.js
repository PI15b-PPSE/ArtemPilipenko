//сам канвас (логический)
var field=document.getElementById('canvas');
//позволяет рисовать по канвасу
var context = field.getContext('2d');

//константы для расположение автомобилей в гараже
var standartX=600;
var standartY=300;
var standartXG=400;
var standartYG=80;

//гараж
var image = new Image();
image.src = '../images/maps/garage.jpg';
 
image.onload = function () {
    context.drawImage(image, standartXG, standartYG);
};
 
var imageCar = new Image();
imageCar.src = '../images/cars/1/car.png';

imageCar.onload = function () {
    context.drawImage(imageCar, standartX,  standartY);
};

var cars = new Array("../images/cars/1/car.png", "../images/cars/2/car.png", "../images/cars/3/car.png", "../images/cars/4/car.png");
cars.lenght=4;
var curr=0;

//функция с действиями для нажатых клавиш
function moveCar(e){
    switch(e.keyCode){
        case 87:   // если нажата клавиша w
            if(curr<cars.lenght-1){
                curr++;
                context.clearRect(0, 0, field.width, field.height);
                imageCar.src = cars[curr];
                context.drawImage(imageCar,  standartX,  standartY);
                context.drawImage(image,  standartXG,  standartYG);
            }
            break;
        case 83:   // если нажата клавиша s
            if(curr>0){
                curr--;
                context.clearRect(0, 0, field.width, field.height);
                imageCar.src = cars[curr];
                context.drawImage(imageCar,  standartX,  standartY);
                context.drawImage(image,  standartXG,  standartYG);
            }
         
            break;
    }
}
window.onkeydown=moveCar;