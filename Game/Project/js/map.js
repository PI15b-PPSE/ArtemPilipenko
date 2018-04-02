/**
* Логический канвас
*
* Используем объект document и метод
* getElementById для присоединения
* canvas с документа html. Дополнительная
* детализация не нужна
*
* @var object field
*/
var field=document.getElementById('canvas');
/**
* Контекст для канваса
*
* Позволяет рисовать по канвасу
* в 2d режиме. Дполнительная
* детализация не нужна
*
* @var object context
*/
var context = field.getContext('2d');

/**
* Изображение карты (первая часть)
*
* Позволяет загрузить
* указанное изображение карты
* на канвас. Дополнительная
* детализация не нужна
*
* @var object image
*/
var image = new Image();
/**
* Изображение карты (вторая часть)
*
* Позволяет загрузить
* указанное изображение карты
* на канвас. Дополнительная
* детализация не нужна
*
* @var object image2
*/
var image2 = new Image();

/**
* Массив возможных карт
*
* Контейнер для карт,
* одна из них будет загружаться.
* Дополнительная детализация не нужна
*
* @var object maps
*/
var maps = new Array();
maps.lenght=3;
//заполнение адресами автомобилей
for(b=0; b<maps.lenght; b++) {
    maps[b]="../images/maps/map"+(b+1)+".png";
}
/**
* Выбранная карта
*
* Номер карты в контейнере,
* на которой будет проходить гонка.
* Дополнительная детализация не нужна
*
* @var object maps
*/
var currMap=Math.floor(Math.random(1,maps.lenght-1)*maps.lenght);

/**
* Изображение карты (третья часть)
*
* Позволяет загрузить
* указанное изображение карты
* на канвас. Дополнительная
* детализация не нужна
*
* @var object image3
*/
var image3 = new Image();
image.src = maps[currMap];
image2.src = maps[currMap];
image3.src = maps[currMap];

image.onload = function () {
    context.drawImage(image, 0, 0);
    context.drawImage(image, 500, 0);
    context.drawImage(image, 1000, 0);
};

/**
* Массив возможных автомобилей
*
* Контейнер для автомобилей,
* два из них будут загружаться.
* Дополнительная детализация не нужна
*
* @var object cars
*/
var cars = new Array();
cars.lenght=8;
//заполнение адресами автомобилей
for(n=0; n<cars.lenght; n++) {
    cars[n]="../images/cars/"+(n+1)+"/car.png";
}
/**
* Выбранный автомобиль игрока
*
* Номер автомобиля в контейнере,
* на которой будет проходить гонка игрока.
* Дополнительная детализация не нужна
*
* @var object currCar
*/
var currCar=Math.floor(Math.random(1,cars.lenght-1)*cars.lenght);
/**
* Выбранный автомобиль оппонента
*
* Номер автомобиля в контейнере,
* на которой будет проходить гонка оппонента.
* Дополнительная детализация не нужна
*
* @var object currOpCar
*/
var currOpCar=Math.floor(Math.random(1,cars.lenght-1)*cars.lenght);
/**
* Изображение автомобиля игрока
*
* Позволяет загрузить
* указанное изображение автомобиля
* на канвас. Дополнительная
* детализация не нужна
*
* @var object imageCar
*/
var imageCar = new Image();
imageCar.src = cars[currCar];
/**
* Изображение автомобиля опонента
*
* Позволяет загрузить
* указанное изображение автомобиля
* опонента на канвас. Дополнительная
* детализация не нужна
*
* @var object imageOp
*/
var imageOp = new Image();
imageOp.src = cars[currOpCar];

imageCar.onload = function () {
    context.drawImage(imageCar, 0, 130);
    context.drawImage(imageCarOp, 0, 250);
};

/**
* Расположение по х автомобиля игрока
*
* Необходимо для изменения
* движения автомобиля игрока.
* При движении меняется координата 
* и отрисовывается компонент imageCar.
* Дополнительная детализация не нужна
* 
* @var object x
*/
var x=0;

/**
* Расположение по y автомобиля игрока
*
* Необходимо для изменения
* движения автомобиля игрока.
* При движении меняется координата 
* и отрисовывается компонент imageCar.
* Дополнительная детализация не нужна
*
* @var object y
*/
var y=130;

/**
* Текущая скорость автомобиля игрока
*
* Регулирует скорость
* изменения параметра x.
* Дополнительная детализация
* не нужна
*
* @var object speed
*/
var speed=0;

/**
* Максимальная скорость автомобиля игрока
*
* Регулирует предел скорости
* изменения параметра x.
* Дополнительная детализация
* не нужна
*
* @var object maxspeed
*/
var maxspeed=40;

/**
* Время изменения лидерства
*
* Отображает количественную величину
* от начала изменения лидерства на дороге.
* Необходима для одногоиз путей победы.
* Дополнительная детализация
* не нужна
*
* @var object timer
*/
var timer=0;

/**
* Расположение по x автомобиля опонента
*
* Необходимо для изменения
* движения автомобиля опонента.
* При движении меняется координата 
* и отрисовывается компонент imageOp.
* Дополнительная детализация не нужна
*
* @var object xOp
*/
var xOp=0;

/**
* Глобальное расположение по x автомобиля опонента
*
* Необходимо для изменения
* движения автомобиля опонента и
* согласование его с автомобилем игрока
* При движении меняется координата 
* и отрисовывается компонент imageOp.
* Дополнительная детализация не нужна
*
* @var object xOpMap
*/
var xOpMap=0;

/**
* Глобальное расположение по y автомобиля опонента
*
* Необходимо для изменения
* движения автомобиля опонента и
* При движении меняется координата 
* и отрисовывается компонент imageOp.
* Дополнительная детализация не нужна
*
* @var object xOpMap
*/
var yOpMap=300;
/**
* Глобальное расположение по x автомобиля игрока
*
* Необходимо для распознования коллизий и 
* длины
* Дополнительная детализация не нужна
*
* @var object xspeed
*/
var xspeed=0;
/**
* Глобальное расположение по x автомобиля оппонента
*
* Необходимо для распознования коллизий и 
* длины
* Дополнительная детализация не нужна
*
* @var object xOpspeed
*/
var xOpspeed=0;

/**
* Текущая скорость автомобиля опонента
*
* Регулирует скорость
* изменения параметра xOp и xOpMap.
* Дополнительная детализация
* не нужна
*
* @var object speedOp
*/
var speedOp=0;

/**
* Максимальная скорость автомобиля опонента
*
* Регулирует предел скорости
* изменения параметра xOp и xOpMap.
* Дополнительная детализация
* не нужна
*
* @var object maxspeedOp
*/
var maxspeedOp=30;

//константы
/**
* Константа 400
*
* Используется в отрисовке
* элементов на канвасе.
* Дополнительная детализация
* не нужна
*
* @var object fourHundred
*/
var fourHundred=400;

/**
* Константа 500
*
* Используется в отрисовке
* элементов на канвасе.
* Дополнительная детализация
* не нужна
*
* @var object fiveHundred
*/
var fiveHundred=500;

/**
* Константа 600
*
* Используется в отрисовке
* элементов на канвасе.
* Дополнительная детализация
* не нужна
*
* @var object sixHundred
*/
var sixHundred=600;

/**
* Константа 1000
*
* Используется в отрисовке
* элементов на канвасе.
* Дополнительная детализация
* не нужна
*
* @var object oneThousand
*/
var oneThousand=1000;

/**
* Константа 1500
*
* Используется в отрисовке
* элементов на канвасе.
* Дополнительная детализация
* не нужна
*
* @var object oneThousandFiveHundred
*/
var oneThousandFiveHundred=1500;

/**
* Константа 5000
*
* Используется в отрисовке
* элементов на канвасе.
* Дополнительная детализация
* не нужна
*
* @var object fiveThousand
*/
var fiveThousand=5000;

/**
* Флаг переключения таймера
*
* Используется в изменении
* лидерства и сбросе таймера.
* Дополнительная детализация
* не нужна
*
* @var object flagTimer
*/
var flagTimer=false;
/**
* Флаг изменения движения оппонента
*
* Используется в изменении
* движения опоннента.
* Дополнительная детализация
* не нужна
*
* @var object flagOnUp
*/
var flagOpUp=false;

var messages = new Array();
messages.lenght=8;
//заполнение адресами автомобилей
messages[0]="Скорость: ";
messages[1]="Длина: ";

context.font='40px Verdana';
context.fillStyle='#60016d';
/**
* Работа со свойствами x, speed, xOp, xOpMap, speedOp 
*
* Если аргументы определены, то устанавливается новое
* значения свойств каждые 50 секунд
*  
* @return void Ничего не возвращает
*/
setInterval(function () {drawDrive(); x+=speed; xOpMap+=speed; xOp+=speedOp}, 50);

/**
* Работа со свойствами x, y, xOp, xOpMap, context, xpeed, speed, xOpspeed, speedOp 
*
* Если аргументы определены, то устанавливается новое
* значения свойств и возвращается изображение на канвас,
* иначе на канвасе не происходит изменений
*  
* @return void Ничего не возвращает
*/
function drawDrive() {
    if(speed!=0) {
        speed-=1;
    }
    context.clearRect(0, 0, field.width, field.height);
    context.drawImage(image,0-x, 0);
    context.drawImage(image,fiveHundred-x, 0);
    context.drawImage(image,oneThousand-x, 0);
    context.drawImage(image,oneThousandFiveHundred-x, 0);
    context.drawImage(imageCar,0, y);

    //изменение движения автомобиля оппонета
    if(yOpMap>=65 && flagOpUp==false) {
        yOpMap-=3.5;
    }
    else {
        flagOpUp=true;
    }
    if(yOpMap<=320 && flagOpUp==true) {
        yOpMap+=3.5;
    }
    else {
        flagOpUp=false;
    }
    
    //рисуем оппонента
    context.drawImage(imageOp, xOp-xOpMap, yOpMap);

    //добавляем длины
    xspeed=xspeed+speed;
    xOpspeed=xOpspeed+speedOp;

    //увеличиваем скорость оппоненту
    while(speedOp<maxspeedOp) {
        speedOp+=1;
    }

    context.fillText(messages[0]+ Math.floor(speedOp)+"/"+maxspeedOp, oneThousand, 600); 
    context.fillText(messages[1]+ xOpspeed+"/100000", oneThousand, 700);

    //сбрасываем x для отрисовки посередине
    if(x>=500) {
        x=0;
    }
    context.fillText("Скорость: "+ speed+"/"+maxspeed, 0, 600);
    context.fillText("Длина: "+ xspeed+"/100000", 0, 700);

    context.fillText("Таймер: "+ timer, oneThousand-500, 600);
    context.fillText("Пиксели отрыва: "+ -Math.floor(xOp-xOpMap), fourHundred+100, 700); 

    //Таймер
    if(-Math.floor(xOp-xOpMap)>0 && flagTimer==true) {
        timer+=1;
    }
    else if (-Math.floor(xOp-xOpMap)<0 && flagTimer==false) {
        timer-=1;
    }
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
    if(xspeed>=100000) {
        context.fillStyle='#32CD32';
        context.fillText("Победа!!!Спринт закончен", fourHundred, fourHundred);
        Window.stop();
    }
    if(xOpspeed>=100000) {
        context.fillStyle='#32CD32';
        context.fillText("Поражение!!!Соперник закончил спринт", fourHundred, fourHundred);
        Window.stop();
    }
    if(-Math.floor(xOp-xOpMap)>=fiveThousand ||-Math.floor(xOp-xOpMap)<=-fiveThousand || timer>=fiveHundred ||timer<=-fiveHundred || xspeed>=100000 || xOpspeed>=100000) {
        speed=0;
        xOpMap=0;
        speedOp=0;
        Window.stop();
    }
    if(y<65 || y>320) {
        context.fillStyle='#FF0000';
    	context.fillText("Сошёл с трассы", fourHundred, fourHundred);
        speed=0;
        xOpMap=0;
        speedOp=0;
        Window.stop();
    }
    if(Math.abs(xspeed-xOpspeed)<=155  && Math.abs(y-yOpMap)<=30) {
    	context.fillStyle='#FF0000';
    	context.fillText("Произошло столкновение", fourHundred, fourHundred);
        speed=0;
        xOpMap=0;
        speedOp=0;
        Window.stop();
    }
};

//функция с действиями для нажатых клавиш
/**
* Работа со свойствами e, speed, y, on 
*
* Если аргументы определены, то устанавливается новое
* значения свойств speed, y, on.
*  
* @param event e Событие нажатия клавиши
* @return void Ничего не возвращает 
*/
function moveCar(e) {
    switch(e.keyCode){
        case 87:   // если нажата клавиша w
            if(maxspeed>speed){
                speed+=3;
            }
            break;
        case 65:   // если нажата клавиша a
            if(speed!=0 && maxspeed>speed){	
                y+=-1;
                speed+=2;
            }
            break;
            case 68:   // если нажата клавиша d
            if(speed!=0 && maxspeed>speed){		
                y+=1;
                speed+=2;
            }
            break;
        case 77:   // если нажата клавиша m 
            if(on==0)
                on=1;
            else on=0;
            sound(on);
            break;
    }
}

window.onkeydown=moveCar;

/**
* Состояние воспроизведения фоновой музыки
*
* Используется в включении/
* отключении аудиофайла.
* Дополнительная детализация
* не нужна
*
* @var object on
*/
var on=1;

/**
* Компонент аудиофайла
*
* Проигрывает указанный аудиофайл.
* Дополнительная детализация
* не нужна
*
* @var object audio
*/
var audio = new Audio(); // Создаём новый элемент Audio

sound(on);

/**
* Работа со свойством audio
*
* Если аргументы определены, то устанавливается новое
* значения свойства audio.
*  
* @param float a Состояние воспроизведения музыки
* @return void Ничего не возвращает
*/
function sound(a) {
    if(a==1) {
        audio.src = '../audio/map.mp3'; // Указываем путь к звуку "аудио"
        audio.autoplay = true; // Автоматически запускаем
    }
    else {
        audio.pause();
    }
}