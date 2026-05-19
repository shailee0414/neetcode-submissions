class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b)
        let ans = []
        for(let i = 0 ; i <nums.length; i++){
            let j = i + 1
            let k = nums.length -1
            while(j<k){
                let temp = nums[i] + nums[j] + nums[k]
                if(temp == 0){
                    ans.push([nums[i] , nums[j] , nums[k]])
                    j++
                    k--
                }
                else if(temp < 0){
                    j++
                }
                else{
                    k--
                }
            }
        }
        const data = [...new Set(ans.map(JSON.stringify))].map(JSON.parse)
        return data;
    }
}
