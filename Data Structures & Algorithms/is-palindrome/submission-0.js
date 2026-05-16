class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase()
        let i =0 
        let j = s.length -1
        let ans = true
        while(i<= j){
            while(!/[a-zA-Z0-9]/.test(s[i])){
                i++
            }
            while(!/[a-zA-Z0-9]/.test(s[j])){
                j--
            }

            if(s[i] != s[j]){
                console.log(s[i], s[j])
                ans = false
                break;
            }
            i++;
            j--;
        }
        return ans

    }
}
