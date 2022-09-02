//замена букв в text на буквы char
function contamination(text, char){
  if (text === '' || char === '') {
    return ''
  } else {
    textChar = char.repeat(text.length)
    return textChar
  }
}
