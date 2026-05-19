class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let ans = 0 
        let i = 0
        let j = i + 1
        while(j < prices.length && i < prices.length){
            ans = Math.max(ans , prices[j] - prices[i])
            if(prices[i] > prices[j]){
                i = j
            }
            j++
        }
        return ans 
    }
}
