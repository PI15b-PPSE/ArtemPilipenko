

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
    context.drawImage(image,0, 0);
	context.drawImage(image,500, 0);
	context.drawImage(image,1000, 0);
 };
 
 var image_car = new Image();
image_car.src = '../images/cars/1/car.png';

 var image_op = new Image();
image_op.src = '../images/cars/2/car.png';

image_car.onload = function () {
    context.drawImage(image_car,0, 130);
	context.drawImage(image_car_op,0, 250);
 };


//данные игрока
var x=0;
var y=130;
var speed=0;
var maxspeed=40;
var lenght=0;
var timer=0;

//длина пути (пока не используется)
var max_lenght=500;

//данные опонента
var x_op=0;
var x_op_map=0;
var speed_op=0;
var maxspeed_op=30;
var lenght_op=0;

//переключение таймера
var flag_timer=false;

//Стили для отображения панели
context.font='40px Verdana';
context.fillStyle='#60016d';
 
//Каждые 50 милисекунд выполняется данная функция
var Game_loop=setInterval(function (){draw_drive(); x+=speed;x_op_map+=speed;x_op+=speed_op}, 50);

//функция передвижения автомобиля
function draw_drive(){
	if(speed!=0)
		speed-=1;
		
 context.clearRect(0, 0, field.width, field.height);
	context.drawImage(image,0-x, 0);
	context.drawImage(image,500-x, 0);
	context.drawImage(image,1000-x, 0);
	 context.drawImage(image,1500-x, 0);
	 context.drawImage(image_car,0, y);
	 
	 lenght+=speed*0.01;
	 
	 lenght_op+=(speed+x_op_map)*0.001;
	  context.drawImage(image_op,x_op-x_op_map, 300);
	  
	  while(speed_op<maxspeed_op)
	  speed_op+=1;
	  context.fillText("Скорость 2: "+ Math.floor(speed_op), 700, 600); 
	  context.fillText("Метраж 2: "+ Math.floor(lenght_op), 700, 650); 

	if(x>=500)
		x=0;
	context.fillText("Скорость: "+ speed, 400, 600); 
	context.fillText("Метраж: "+ Math.floor(lenght), 400, 650); 
	context.fillText("Пиксели отрыва: "+ -Math.floor(x_op-x_op_map), 400, 700); 
	context.fillText("Таймер: "+ timer, 900, 700);
	
	//Таймер
	if(-Math.floor(x_op-x_op_map)>0 && flag_timer==true)
		timer+=1;
	else if (-Math.floor(x_op-x_op_map)<0 && flag_timer==false)
		timer-=1;
	else 
	{
		flag_timer=!flag_timer;
			timer=0;
	}
	
	
	//Пути завершения игры
	if(-Math.floor(x_op-x_op_map)>=5000)
	{
		context.fillStyle='#32CD32';
		context.fillText("Вы выиграли по разнице пути!!!", 400, 400);
		Window.stop();
	}
	if(-Math.floor(x_op-x_op_map)<=-5000)
	{
		context.fillStyle='#FF0000';
		context.fillText("Вы проиграли по разнице пути!!!", 400, 400);
		Window.stop();
	}
	if(timer>=500){
		context.fillStyle='#32CD32';
		context.fillText("Вы выиграли по таймеру!!!", 400, 400);
		Window.stop();
	}
	if(timer<=-500){
		context.fillStyle='#FF0000';
		context.fillText("Вы проиграли по таймеру!!!", 400, 400);
		Window.stop();
	}
	if(-Math.floor(x_op-x_op_map)>=5000 ||-Math.floor(x_op-x_op_map)<=-5000 || timer>=500 ||timer<=-500  )
	{
		x=0;
		y=130;
		speed=0;
		x_op=0;
		x_op_map=0;
		speed_op=0;
		lenght=0;
		lenght_op=0;
		Window.stop();
	}
};

//функция с действиями для нажатых клавиш
function moveCar(e){

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

    }
}
window.onkeydown=moveCar;

sound();

function sound() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = '../audio/map.mp3'; // Указываем путь к звуку "аудио"
  audio.autoplay = true; // Автоматически запускаем
}