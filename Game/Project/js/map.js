//сам канвас (логический)
var field=document.getElementById('canvas');
//позволяет рисовать по канвасу
var context = field.getContext('2d');

var image = new Image();
var image2 = new Image();
var image3 = new Image();
image.src = '../images/maps/map1.png';
image2.src = '../images/maps/map1.png';
image3.src = '../images/maps/map1.png';

image.onload = function () {
    context.drawImage(image, 0, 0);
    context.drawImage(image, 500, 0);
    context.drawImage(image, 1000, 0);
};

var imageCar = new Image();
imageCar.src = '../images/cars/4/car.png';

var imageOp = new Image();
imageOp.src = '../images/cars/1/car.png';

imageCar.onload = function () {
    context.drawImage(imageCar, 0, 130);
    context.drawImage(imageCarOp, 0, 250);
};


//данные игрока
var x=0;
var y=130;
var speed=0;
var maxspeed=40;
var lenght=0;
var timer=0;

//данные опонента
var xOp=0;
var xOpMap=0;
var speedOp=0;
var maxspeedOp=30;
var lenghtOp=0;

//константы
var fourHundred=400;
var fiveHundred=500;
var sixHundred=600;
var oneThousand=1000;
var oneThousandFiveHundred=1500;
var fiveThousand=5000;

//переключение таймера
var flagTimer=false;

//Стили для отображения панели
context.font='40px Verdana';
context.fillStyle='#60016d';

//Каждые 50 милисекунд выполняется данная функция
var gameLoop=setInterval(function () {drawDrive(); x+=speed; xOpMap+=speed; xOp+=speedOp}, 50);

//функция передвижения автомобиля
function drawDrive() {
    if(speed!=0)
        speed-=1;

    context.clearRect(0, 0, field.width, field.height);
    context.drawImage(image,0-x, 0);
    context.drawImage(image,fiveHundred-x, 0);
    context.drawImage(image,oneThousand-x, 0);
    context.drawImage(image,oneThousandFiveHundred-x, 0);
    context.drawImage(imageCar,0, y);

    lenght+=speed*0.01; 
    lenghtOp+=(speed+xOpMap)*0.001;
    context.drawImage(imageOp, xOp-xOpMap, 300);

    while(speedOp<maxspeedOp)
        speedOp+=1;
    context.fillText("Скорость соперника: "+ Math.floor(speedOp), oneThousand-50, 600); 
    //context.fillText("Метраж 2: "+ Math.floor(lenghtOp), 700, 650); 

    if(x>=500)
        x=0;
    context.fillText("Скорость: "+ speed, 0, 600); 
    //context.fillText("Метраж: "+ Math.floor(lenght), fourHundred, 650); 
    context.fillText("Пиксели отрыва: "+ -Math.floor(xOp-xOpMap), fourHundred-100, 700); 
    context.fillText("Таймер: "+ timer, oneThousand-200, 700);

    //Таймер
    if(-Math.floor(xOp-xOpMap)>0 && flagTimer==true)
        timer+=1;
    else if (-Math.floor(xOp-xOpMap)<0 && flagTimer==false)
        timer-=1;
    else {
        flagTimer=!flagTimer;
        timer=0;
    }

    //Пути завершения игры
    if(-Math.floor(xOp-xOpMap)>=fiveThousand) {
        context.fillStyle='#32CD32';
        context.fillText("Победа!!!Разница пути", fourHundred, fourHundred);
        Window.stop();
    }
    if(-Math.floor(xOp-xOpMap)<=-fiveThousand) {
        context.fillStyle='#FF0000';
        context.fillText("Поражение!!!Разница пути", fourHundred, fourHundred);
        Window.stop();
    }
    if(timer>=fiveHundred) {
        context.fillStyle='#32CD32';
        context.fillText("Победа!!!Обошёл по таймеру", fourHundred, fourHundred);
        Window.stop();
    }
    if(timer<=-fiveHundred) {
        context.fillStyle='#FF0000';
        context.fillText("Поражение!!!Проиграл по таймеру", fourHundred, fourHundred);
        Window.stop();
    }
    if(-Math.floor(xOp-xOpMap)>=fiveThousand ||-Math.floor(xOp-xOpMap)<=-fiveThousand || timer>=fiveHundred ||timer<=-fiveHundred) {
        x=0;
        y=130;
        speed=0;
        xOp=0;
        xOpMap=0;
        speedOp=0;
        lenght=0;
        lenghtOp=0;
        Window.stop();
    }
};

//функция с действиями для нажатых клавиш
function moveCar(e) {
    switch(e.keyCode){
        case 87:   // если нажата клавиша w
            if(maxspeed>speed){
                speed+=3;
            }
            break;
        case 65:   // если нажата клавиша a
            if(y!=100 && speed!=0 && maxspeed>speed){	
                y+=-1;
                speed+=2;
            }
            break;
            case 68:   // если нажата клавиша d
            if(y!=300 && speed!=0 && maxspeed>speed){		
                y+=1;
                speed+=2;
            }
            break;
        case 77:   // если нажата клавиша a 
            if(on==0)
                on=1;
            else on=0;
            sound(on);
            break;
    }
}
window.onkeydown=moveCar;

var on=1;
var audio = new Audio(); // Создаём новый элемент Audio

sound(on);

function sound(a) {
    if(a==1) {
        audio.src = '../audio/map.mp3'; // Указываем путь к звуку "аудио"
        audio.autoplay = true; // Автоматически запускаем
    }
    else {
        audio.pause();
    }
}