class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}
        for(let i = 0; i <nums.length; i++){
            let count = 1
            if(obj[nums[i]]){
                obj[nums[i]]  = obj[nums[i]] + count
            }
            else{
                obj[nums[i]] = count
            }
           
        }

        let arr = Object.entries(obj)
        arr.sort((a, b)=>b[1] - a[1])
        console.log(arr)
        let ans = []
        for(let i = 0; i< k ; i++){
            ans.push(Number(arr[i][0]))
        }

        return ans
    }
}
