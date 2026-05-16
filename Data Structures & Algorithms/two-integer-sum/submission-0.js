class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {}
        let ans = []
        for(let i = 0 ; i< nums.length ; i++){
            let temp = target - nums[i]

            if(obj[temp] >= 0){
                ans.push(obj[temp], i)
                break
            }
            else{
                obj[nums[i]]  = i
            }

            
        }
        return ans
    }
}
