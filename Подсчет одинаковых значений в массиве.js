function countSheeps(arrayOfSheep) {
  let trueSheep = arrayOfSheep.filter(item => item === true).length //filter - формирует новый массив при помощи функции
  return trueSheep
}
