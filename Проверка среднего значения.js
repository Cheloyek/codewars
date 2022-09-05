//1
function betterThanAverage(classPoints, yourPoints) {
  sum = 0
  //сумма значений массива
  for (i = 0; i < classPoints.length; i++) {
    sum += classPoints[i]
  }
  //среднее арифметическое значений массива
    let mSum = sum / classPoints.length

  if (mSum < yourPoints) {
    return true
  } else {
    return false
  }
}

//2
function getAverage(marks){
  sum = 0
  for (i = 0; i < marks.length; i++) {
    sum += marks[i]
  }
  let mSum = Math.round(sum / marks.length) //округление до ближайшего целого
    return mSum
}
