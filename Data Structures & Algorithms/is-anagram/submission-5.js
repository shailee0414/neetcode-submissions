class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = {}
        for(let i = 0 ; i< s.length; i++){
            if(map[s[i]]){
                map[s[i]] = map[s[i]] + 1
            }
            else{
                map[s[i]] =   1
            }
           
        }

        for(let i = 0 ; i < t.length ; i++){
            if(map[t[i]]){
                map[t[i]] = map[t[i]] - 1
            }
            else{
                map[t[i]] =   -1
            }
        }
        return Object.values(map).every(e => e == 0) ? true : false
    }
}
