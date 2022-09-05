//varuant 1
function countSheeps(arrayOfSheep) {
  let trueSheep = arrayOfSheep.filter(item => item === true).length //filter - формирует новый массив при помощи функции
  return trueSheep
}

//variant 2
function countSheeps(arrayOfSheep) {
  let num = 0;
  
  for(let i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] == true)
      num++;
      
  return num;
}
