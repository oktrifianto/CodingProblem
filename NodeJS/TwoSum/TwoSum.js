/** ----------------------------
 * LeetCode
 * https://leetcode.com/problems/two-sum/
 * 
 * @params nums   {array}
 * @params target {number}
 * @return array
 */

function TwoSum(nums, target) {
    let result = [];
    for (let i = 0; i < (nums.length - 1); i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] == target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

// how to check === [2,7,11,15]
// 0, 1
// 0, 2
// 0, 3
// 1, 2
// 1, 3
// 2, 3

console.log(TwoSum([2,7,11,15], 9)); // [0, 1]
console.log(TwoSum([3,2,4], 6));     // [1, 2]
console.log(TwoSum([3,3], 6));       // [0, 1]