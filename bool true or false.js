//функция проверяющая введенную строку
//variant 1
function boolToWord( bool ){
  if (bool === true) {
    return "Yes"
  } else {
    return "No"
  }
}

//variant 2
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}
