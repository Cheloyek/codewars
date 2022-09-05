//variant 1
function solution(str){
  let s = str.split('') //принимает строку и преобразует в массив, разбивая ее по разделителю
  let t = s.reverse() //переворачивает элементы массива
  let r = t.join('') //соединяет все элементы массива в строку
  return r
}

//variant 2
function solution(str){
  return str.split('').reverse().join('');  
}
