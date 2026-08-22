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
        // console.log(str)
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // console.log(str)
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
            console.log(typeof len, len)
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
