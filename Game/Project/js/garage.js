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

//массив автомобилей
var cars = new Array();
//коилчество автомобилей
cars.lenght=8;
//номер текущего автомобиля
var curr=0;

//заполнение адресами автомобилей
for(i=0;i<cars.lenght;i++)
	cars[i]="../images/cars/"+(i+1)+"/car.png";

//добавление информации для пользователя
context.font = '20px Arial';
context.fillStyle='#FF0000';
context.fillText("Для изменения автомобиля, нажимайте: w-вперёд, s- назад", standartXG+30,40);
context.fillText("Для включения/отключения фоновой музыки, нажимайте: m", standartXG+30,70);

//функция с действиями для нажатых клавиш
function moveCar(e){
    switch(e.keyCode){
        case 87:   // если нажата клавиша w
            if(curr<cars.lenght-1){
            	var audioCar = new Audio();
            	audioCar.src = '../audio/garage_change_car.mp3';
            	audioCar.autoplay = true;
                curr++;
                context.clearRect(0, 0, field.width, field.height);
                imageCar.src = cars[curr];
                context.drawImage(imageCar,  standartX,  standartY);
                context.drawImage(image,  standartXG,  standartYG);
                context.fillText("Для изменения автомобиля, нажимайте: w-вперёд, s- назад", standartXG+30,40);
                context.fillText("Для включения/отключения фоновой музыки, нажимайте: m", standartXG+30,70);
            }
            break;
        case 83:   // если нажата клавиша s
            if(curr>0){
            	var audioCar = new Audio();
            	audioCar.src = '../audio/garage_change_car.mp3';
            	audioCar.autoplay = true; 
                curr--;
                context.clearRect(0, 0, field.width, field.height);
                imageCar.src = cars[curr];
                context.drawImage(imageCar,  standartX,  standartY);
                context.drawImage(image,  standartXG,  standartYG);
                context.fillText("Для изменения автомобиля, нажимайте: w-вперёд, s- назад", standartXG+30,40);
                context.fillText("Для включения/отключения фоновой музыки, нажимайте: m", standartXG+30,70);
            }
            break;
        case 77: //если нажата клавиша m
            {
            	//изменение состояние воспроизведения музыки
            	if(on==1) on=0;
            	else on=1;
                sound(on);
            }
    }
    context.font = '20px Arial';
    context.fillStyle='#FF0000';
}
window.onkeydown=moveCar;

//состояние воспроизведения фоновой музыки
var on=1;


var audio = new Audio(); // Создаём новый элемент Audio
//включение воспроиведение музыки
sound(on);

function sound(a) {
	if(a==1){
    	audio.src = '../audio/garage.mp3'; // Указываем путь к звуку "аудио"
    	audio.autoplay = true; // Автоматически запускаем
	}
	else{
        audio.pause();
	}
}
   