/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        let value = nums[i];
        let sum = 0;
        while(value > 0) {
            sum += value % 10;
            value = Math.floor(value/10);
        }
        if(sum === i){
            return i;
        }
    } return -1;
};