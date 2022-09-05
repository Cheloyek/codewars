//variant 1
function basicOp(operation, value1, value2) { 
  if (operation == '+') {
    return value1 + value2
  } else if (operation == '-') {
    return value1 - value2
  } else if (operation == '*') {
    return value1 * value2
  } else if (operation == '/') {
    return value1 / value2
  } 
}


//variant 2
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}
