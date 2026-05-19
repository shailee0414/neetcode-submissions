class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let ans = 0
        let map = new Map()
        let start = 0
        for(let i = 0 ; i < s.length; i++){
            if(map.get(s[i]) >=0){
                start = Math.max(map.get(s[i])+1, start)
            }
            ans = Math.max(ans, i - start +1 )
            map.set(s[i], i)
        }
        return ans || s.length
    }
}
