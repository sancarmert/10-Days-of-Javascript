function getCount(objects){
    let equal = objects.filter(objects => objects.x === objects.y)
    let number = 0;
    for(let i=0; i<equal.length; i++){
        number+=1;
    }
    return number;
}