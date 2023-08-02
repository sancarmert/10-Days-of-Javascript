function getSecondLargest(nums){
    let largest = - Infinity;
    let secondlargest = - Infinity;

    for(let i of nums){
        if(i>largest){
            secondlargest = largest;
            largest = i;
        }
        else if (i>secondLargest && i<largest)
            secondlargestLargest = i;
        
        return secondlargest;
    }
}