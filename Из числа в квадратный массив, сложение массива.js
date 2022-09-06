function squareDigits(num){
  let stringNum = String(num) //преобразует число в строку
  let arrayNum = Array.from(stringNum) //преобразует строку в массив
  const newArray = arrayNum.map(el => el **2) //возведение в квадрат каждого значения массива
  let sumNum = newArray.map(i => x += i, x = 0).reverse()[0] //суммирование значений массива
  console.log (sumNum)
}
squareDigits (3212)
