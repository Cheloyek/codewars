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
