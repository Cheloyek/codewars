function squareDigits(num){
  let stringNum = String(num) //преобразование числа в строку
  let arrayNum = Array.from(stringNum) //преобразование строки в массив
  const newArray = arrayNum.map(el => el **2) //возведение в квадрат каждого значения массива
  let joinNum = newArray.join('') //соединение элементов массива 
  console.log (joinNum)
}
squareDigits (3212)
