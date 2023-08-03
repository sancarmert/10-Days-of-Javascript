function Rectangle(a,b){
    let recObject = {
         length : a,
         width : b,
         perimeter : 2*(a+b),
         area : a * b
    }
    return recObject;
}