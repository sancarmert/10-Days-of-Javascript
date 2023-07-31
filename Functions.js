function factorial(int){
    let result;
    int === 1 ? result = 1 : result = factorial(int-1) * int;
    return result;
}
