/**
* Логический канвас
*
* Используем объект document и метод
* getElementById для присоединения
* canvas с документа html. Дополнительная
* детализация не нужна
*
* @var canvas $field
*/
var field=document.getElementById('canvas');
/**
* Контекст для канваса
*
* Позволяет рисовать по канвасу
* в 2d режиме. Дполнительная
* детализация не нужна
*
* @var context $context
*/
var context = field.getContext('2d');

/**
* Изображение карты
*
* Позволяет загрузить
* указанное изображение карты
* на канвас. Дополнительная
* детализация не нужна
*
* @var image $image
*/
var image = new Image();
var image2 = new Image();
var image3 = new Image();
/**
* Ресурс изображения image
*
* Позволяет загрузить
* указанное изображение в image.
* Дополнительная
* детализация не нужна
*
* @var String $src
*/
image.src = '../images/maps/map1.png';
image2.src = '../images/maps/map1.png';
image3.src = '../images/maps/map1.png';

image.onload = function () {
    context.drawImage(image, 0, 0);
    context.drawImage(image, 500, 0);
    context.drawImage(image, 1000, 0);
};

/**
* Изображение автомобиля игрока
*
* Позволяет загрузить
* указанное изображение автомобиля
* на канвас. Дополнительная
* детализация не нужна
*
* @var image $imageCar
*/
var imageCar = new Image();
imageCar.src = '../images/cars/4/car.png';
/**
* Изображение автомобиля опонента
*
* Позволяет загрузить
* указанное изображение автомобиля
* опонента на канвас. Дополнительная
* детализация не нужна
*
* @var image $imageOp
*/
var imageOp = new Image();
imageOp.src = '../images/cars/1/car.png';

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
* @var float $x
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
* @var float $y
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
* @var float $speed
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
* @var float $maxspeed
*/
var maxspeed=40;

/**
* Длина пройденного пути автомобиля игрока
*
* Отображает пройденную длину
* автомобиля игрока по параметру x.
* Необходима для вычисления разницы пути.
* Дополнительная детализация
* не нужна
*
* @var float $length
*/
var lenght=0;

/**
* Время изменения лидерства
*
* Отображает количественную величину
* от начала изменения лидерства на дороге.
* Необходима для одногоиз путей победы.
* Дополнительная детализация
* не нужна
*
* @var float $timer
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
* @var float $xOp
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
* @var float $xOpMap
*/
var xOpMap=0;

/**
* Текущая скорость автомобиля опонента
*
* Регулирует скорость
* изменения параметра xOp и xOpMap.
* Дополнительная детализация
* не нужна
*
* @var float $speedOp
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
* @var float $maxspeedOp
*/
var maxspeedOp=30;

/**
* Длина пройденного пути автомобиля опонента
*
* Отображает пройденную длину
* автомобиля опонента по параметру x.
* Необходима для вычисления разницы пути.
* Дополнительная детализация
* не нужна
*
* @var float $lengthOp
*/
var lenghtOp=0;

//константы
/**
* Константа 400
*
* Используется в отрисовке
* элементов на канвасе.
* Дополнительная детализация
* не нужна
*
* @var float $fourHundred
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
* @var float $fiveHundred
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
* @var float $sixHundred
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
* @var float $oneThousand
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
* @var float $oneThousandFiveHundred
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
* @var float $fiveThousand
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
* @var boolean $flagTimer
*/
var flagTimer=false;

//Стили для отображения панели
 /**
 * Шрифт контекста context
 *
 * Позволяет установить
 * указанный шрифт в context.
 * Дополнительная
 * детализация не нужна
 *
 * @var String $font
 */
context.font='40px Verdana';
context.fillStyle='#60016d';

//Каждые 50 милисекунд выполняется данная функция
var gameLoop=setInterval(function () {drawDrive(); x+=speed; xOpMap+=speed; xOp+=speedOp}, 50);

//функция передвижения автомобиля
/**
* Работа со свойствами x, y, xOp, xOpMap, context, lenght, speed, lenghtOp, speedOp 
*
* Если аргументы определены, то устанавливается новое
* значения свойств и возвращается изображение на канвас,
* иначе на канвасе не происходит изменений
*  
* @return mixed Возвращает текущее значение
* свойств.
*/
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
/**
* Работа со свойствами e, speed, y, on 
*
* Если аргументы определены, то устанавливается новое
* значения свойств speed, y, on.
*  
* @param event e Событие нажатия клавиши
* @return mixed Возвращает текущее значение
* свойств.
*/
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

 /**
 * Свойство установки события нажатия клавиши
 *
 * Позволяет установить
 * функцию, отвечающую за нажатие клавиш.
 * Дополнительная
 * детализация не нужна
 *
 * @var $onkeydown
 */
window.onkeydown=moveCar;

/**
* Состояние воспроизведения фоновой музыки
*
* Используется в включении/
* отключении аудиофайла.
* Дополнительная детализация
* не нужна
*
* @var float $on
*/
var on=1;

/**
* Компонент аудиофайла
*
* Проигрывает указанный аудиофайл.
* Дополнительная детализация
* не нужна
*
* @var audio $audio
*/
var audio = new Audio(); // Создаём новый элемент Audio

sound(on);

//функция для включения/отключения воспроизведения аудиофайла
/**
* Работа со свойством audio
*
* Если аргументы определены, то устанавливается новое
* значения свойства audio.
*  
* @param float a Состояние воспроизведения музыки
* @return mixed Возвращает текущее значение
* свойств.
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