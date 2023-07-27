import './style.css'

// задание 1
let arr = [5, 12, 76, 23, 4, 1, 54, 87, 33, 41]

function showArr(arr: any){
  console.log(arr)
}
showArr(arr)

function showEven(arr: any){
  let evenArr = []
  for(let i of arr){
    if(i%2 == 0) evenArr.push(i)
  }
  console.log(`Чётные числа ${evenArr}`)
}
showEven(arr)

function sumEl(arr: any){
  let sum = arr.reduce((sum: number, el: number) => sum + el, 0)
  console.log(`Сумма элементов ${sum}`)
}
sumEl(arr)

// задание 2

// задание 3