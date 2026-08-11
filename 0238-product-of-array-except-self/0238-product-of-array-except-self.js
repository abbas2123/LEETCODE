/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prodect = 1
    let result = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        result[i] = prodect;
        prodect *= nums[i];
    }
    prodect = 1;
    for (let i = nums.length-1; i >= 0; i--) {
        result[i] *= prodect;
        prodect *= nums[i]
    }
    return result
};