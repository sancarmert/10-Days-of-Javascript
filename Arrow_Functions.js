function modifyArray(nums){
    return nums.map(elm => (elm % 2==0) ? elm*2 : elm*3) ;
}