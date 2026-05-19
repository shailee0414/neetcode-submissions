class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ans = 0
        let i =0
        let j = heights.length- 1

        while(i<j){
            ans = Math.max(ans, Math.min(heights[j], heights[i])*(j-i))
            if(heights[i]>heights[j]){
                j--
            }
            else{
                i++
            }
        }
        return ans
    }
}
