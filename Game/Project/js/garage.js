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

//константы для расположение автомобилей в гараже

/**
* Константа 600
*
* Используется в отрисовке
* автомобиля в гараже на канвасе по коодинате x.
* Дополнительная детализация
* не нужна
*
* @var float $standartX
*/
var standartX=600;
/**
* Константа 300
*
* Используется в отрисовке
* автомобиля в гараже на канвасе по коодинате y.
* Дополнительная детализация
* не нужна
*
* @var float $standartY
*/
var standartY=300;
/**
* Константа 400
*
* Используется в отрисовке
* гаража на канвасе по коодинате x.
* Дополнительная детализация
* не нужна
*
* @var float $standartXG
*/
var standartXG=400;
/**
* Константа 80
*
* Используется в отрисовке
* гаража на канвасе по коодинате y.
* Дополнительная детализация
* не нужна
*
* @var float $standartYG
*/
var standartYG=80;

/**
* Изображение гаража
*
* Позволяет загрузить
* указанное изображение карты
* на канвас. Дополнительная
* детализация не нужна
*
* @var image $image
*/
var image = new Image();
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
image.src = '../images/maps/garage.jpg';

image.onload = function () {
    context.drawImage(image, standartXG, standartYG);
};

/**
* Изображение автомобиля
*
* Позволяет загрузить
* указанное изображение автомобиля
* на канвас. Дополнительная
* детализация не нужна
*
* @var image $imageCar
*/
var imageCar = new Image();
imageCar.src = '../images/cars/1/car.png';

imageCar.onload = function () {
    context.drawImage(imageCar, standartX,  standartY);
};

/**
* Массив автомобилей
*
* Содержит все возможные автомобили
* в программе.
* Дополнительная
* детализация не нужна
*
* @var $cars
*/
var cars = new Array();
/**
* Количество автомобилей (свойство объекта cars)
*
* Содержит количество возможных
* автомобилей в программе.
* Дополнительная
* детализация не нужна
*
* @var int $lenght
*/
cars.lenght=8;
/**
* Номер текущего автомобиля
*
* Содержит номер текущего автомобиля.
* Необходимо для отображения в гараже.
* Дополнительная
* детализация не нужна
*
* @var int $curr
*/
var curr=0;

//заполнение адресами автомобилей
for(i=0; i<cars.lenght; i++)
    cars[i]="../images/cars/"+(i+1)+"/car.png";

//добавление информации для пользователя
context.font = '20px Arial';
 /**
 * Стиль объекта context
 *
 * Позволяет установить
 * указанный цвет в context.
 * Дополнительная
 * детализация не нужна
 *
 * @var String $fillStyle
 */
context.fillStyle='#FF0000';
 /**
 * Текст объекта context
 *
 * Позволяет установить
 * указанный текст в context.
 * Дополнительная
 * детализация не нужна
 *
 * @var $fillText
 */
context.fillText("Для изменения автомобиля, нажимайте: w-вперёд, s- назад", standartXG+30,40);
context.fillText("Для включения/отключения фоновой музыки, нажимайте: m", standartXG+30,70);


//функция с действиями для нажатых клавиш
/**
* Работа со свойствами e, curr, context, imageCar, on 
*
* Если аргументы определены, то устанавливается новое
* значения свойств curr, context, imageCar, on.
*  
* @param event e Событие нажатия клавиши
* @return mixed Возвращает текущее значение
* свойств.
*/
function moveCar(e) {
    switch(e.keyCode) {
        case 87: // если нажата клавиша w
            if(curr<cars.lenght-1) {
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
        case 83: // если нажата клавиша s
            if(curr>0) {
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
                //изменение состояние воспроизведения музыки
                if(on==1) on=0;
                else on=1;
                sound(on);
    }
    context.font = '20px Arial';
    context.fillStyle='#FF0000';
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
//включение воспроиведение музыки
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
        audio.src = '../audio/garage.mp3'; // Указываем путь к звуку "аудио"
        audio.autoplay = true; // Автоматически запускаем
    }
    else {
        audio.pause();
    }
}