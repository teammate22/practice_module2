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

function maxEl(arr: any){
  let max = 0
  for(let i of arr){
    if(i > max) max = i
  }
  console.log(`Максимальное число ${max}`)
}
maxEl(arr)

function addByIndex(arr :any, index: number, element: any){
  for(let i in arr){
    if(+i == index){
      arr.splice(i, 0, element)
    }
  }
  showArr(arr)
}
addByIndex(arr, 5, 'new element')

function deleteByIndex(arr :any, index: number){
  for(let i in arr){
    if(+i == index){
      arr.splice(i, 1)
    }
  }
  showArr(arr)
}
deleteByIndex(arr, 10)

// задание 2

// задание 3