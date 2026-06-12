/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let a = new Set(nums1);
    let result = new Set();

    for(let b of nums2){
        if(a.has(b)){
            result.add(b);
        }
    }
    return [...result];
};