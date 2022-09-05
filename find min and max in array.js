var min = function(list){
    
    return list.sort((a, b) => a - b) [0] //сортирует от меньшего к большему и выводит меньшее
}

var max = function(list){
    
    return list.sort((a, b) => b - a) [0] //сортирует от большего к меньшему и выводит меньшее
}
