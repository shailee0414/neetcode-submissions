class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // [-4, -1, -1, 0, 1, 2]
        nums.sort((a,b)=>a-b)
        let ans = []
        for(let i = 0 ; i <nums.length; i++){
            let j = i + 1
            let k = nums.length -1

            // if(i > 0 && nums[i]== nums[i-1]){continue;}

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
                // while(j< k && nums[j] == nums[j-1]){
                //     j++
                // }
                // while(j< k && nums[k] == nums[k-1]){
                //     k--
                // }
            }
        }
        const unique = [
        ...new Set(ans.map(JSON.stringify))
        ].map(JSON.parse);
        return unique;
    }
}
