class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let i =0
        let j = nums.length -1

        while(i<j){
            let sum = nums[i] + nums[j]
            if(sum == target) return [i+1, j+1]
            if(sum > target) j--
            else i++
        }
        return [-1, -1]

    }
}
