class Polygon{
    constructor(array){
      this.arr = array;
    }  
    perimeter(){
      return this.arr.reduce((a, c) => a + c );
    }    
  }