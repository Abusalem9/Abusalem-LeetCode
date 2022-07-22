/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     let map = new Map(); 
     for(let i =0;i<nums.length;i++){
          if(map.hasOwnProperty(target-nums[i])===true) return [i,map[target-nums[i]]]
         map[nums[i]] = i;
     }
};