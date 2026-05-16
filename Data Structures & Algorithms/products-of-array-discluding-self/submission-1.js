class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let numsProduct = 1;
        let zeros = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) zeros++;
            if (zeros <= 1) {
                numsProduct *= nums[i] ? nums[i] : 1;
            } else {
                numsProduct *= nums[i];
            }
        }

        let ans = [];
        for (let i = 0; i < nums.length; i++) {
            if (zeros >= 1) {
                if (nums[i] == 0) {
                    ans.push(Math.floor(numsProduct));
                } else {
                    ans.push(0);
                }
            } else {
                ans.push(Math.floor(numsProduct / nums[i]));
            }
        }
        return ans;
    }
}
