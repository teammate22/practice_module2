import './style.css'

const rectangle = {
  leftTop: {x: 0, y: 4},
  rightBottom: {x: 7, y: 0}
};

let width = rectangle.rightBottom.x - rectangle.leftTop.x;
let height = rectangle.leftTop.y - rectangle.rightBottom.y;

function printInfo(rectangle: any) {
  console.log(`Левая верхняя точка: (${rectangle.leftTop.x}, ${rectangle.leftTop.y})`);
  console.log(`Правая нижняя точка: (${rectangle.rightBottom.x}, ${rectangle.rightBottom.y})`);
  console.log(`Правая верхняя точка: (${rectangle.rightBottom.x}, ${rectangle.leftTop.y})`);
  console.log(`Левая нижняя точка: (${rectangle.leftTop.x}, ${rectangle.rightBottom.y})`);
}

printInfo(rectangle);

function showHeight(){
  console.log(`Высота прямоугольника: ${height}`);
}

showHeight();

function showWidth(){
  console.log(`Ширина прямоугольника: ${width}`);
}

showWidth();

function showSquare(){
  console.log(`Площадь прямоугольника: ${height * width}`);
}

showSquare();

function showPerimeter(){
  console.log(`Периметр прямоугольника: ${(height + width) * 2}`);
}

showPerimeter();

function editWidth(num: number){
  width += num;
  console.log(`Ширина увеличена на ${num}`);
  showWidth();
}

editWidth(5);

function editHeight(num: number){
  height += num;
  console.log(`Высота увеличена на ${num}`);
  showHeight();
}

editHeight(4);

function editBoth(numW: number, numH: number){
  width += numW;
  height += numH;
  console.log(`Высота увеличена на ${numH}, ширина увеличена на ${numW}`);
  showHeight();
  showWidth();
}

editBoth(2, 3);

function offsetX(rectangle: any, num: number){
  rectangle.leftTop.x += num;
  rectangle.rightBottom.x += num;
  console.log(`Прямоугольник смещен по оси X на ${num}`);
  printInfo(rectangle)
}

offsetX(rectangle, 3);

function offsetY(rectangle: any, num: number){
  rectangle.leftTop.y += num;
  rectangle.rightBottom.y += num;
  console.log(`Прямоугольник смещен по оси Y на ${num}`);
  printInfo(rectangle)
}

offsetY(rectangle, 4);

function offsetBoth(rectangle: any, numX: number, numY: number){
  offsetX(rectangle, numX)
  offsetY(rectangle, numY)
}

offsetBoth(rectangle, 2, 3);

function isPointInside(rectangle: any, cord: any){
  if(cord.x >= rectangle.leftTop.x && cord.x <= rectangle.rightBottom.x && cord.y <= rectangle.leftTop.y && cord.y >= rectangle.rightBottom.y){
    console.log('Точка находится внутри прямоугольника');
  } else {
    console.log('Точка не находится внутри прямоугольника')
  }
}

isPointInside(rectangle, {x: 7, y: 5});
isPointInside(rectangle, {x: 8, y: 10});