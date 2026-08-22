class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        for (let st of strs) {
            str = str + st.length + "#" + st
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const ans = []
        for(let i = 0 ; i <str.length; i++){
            let len = str[i]
            i++
            while(str[i] != "#"){
                len = len + str[i]
                i++
            }
            i++
            len = len - 0
            let st = ""
            while(st.length < len){
                st += str[i]
                i++
            }
            i--
            ans.push(st)
        }
        return ans
    }
}
