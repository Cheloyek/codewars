// При получении числа от 0 до 9 выводить слово
function switchItUp(number){
  switch(number) {
    case 0:
        number = '0';
        return 'Zero';
        break;  
    case 1:
        number = '1';
        return 'One';
        break;
      case 2:
        number = '2';
        return 'Two';
        break;
      case 3:
        number = '3';
        return 'Three';
        break;
      case 4:
        number = '4';
        return 'Four';
        break;
      case 5:
        number = '5';
        return 'Five';
        break;
      case 6:
        number = '6';
        return 'Six';
        break;
      case 7:
        number = '7';
        return 'Seven';
        break;
      case 8:
        number = '8';
        return 'Eight';
        break;
      case 9:
        number = '9';
        return 'Nine';
        break;
  }
}
