class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a, b) => a - b);
        let i = 0;
        let j = 1;
        if (nums.length > 1) {
            while (j < nums.length) {
                if (nums[i] !== nums[j]) {
                    i++;
                    nums[i] = nums[j];
                }
                j++;
            }
            nums.length = i + 1;
        }

        let ans = 0;
        let temp = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - 1 == nums[i - 1]) {
                temp = temp ? temp + 1 : 2;
            } else {
                temp = 0;
            }
            ans = Math.max(temp, ans);
        }
        if(ans == 0 && nums.length) return 1

        return ans 
    }
}
