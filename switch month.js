//Вход - номер месяца, проверка по номеру месяца, вывод - количество дней в месяце
function howManydays(month){
  var days;
  switch (month){
    case 2:
      days = 28
      return days
      break
    case 4:
      days = 30
     return days
      break
      case 6:
      days = 30
      console.log(days)
      break
      case 9:
      days = 30
      console.log(days)
      break
      case 11:
      days = 30
      console.log(days)
      break
    default: //1,3,5,7,8,10,12 месяцы 31 день
      days = 31
      console.log(days)
  }
  return days;
}
