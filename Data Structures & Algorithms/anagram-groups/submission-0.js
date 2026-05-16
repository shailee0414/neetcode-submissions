class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(const str of strs){
            let temp = str
            temp = temp.split("").sort().join("")
            let existingStr = map.get(temp)
            if(existingStr){
                existingStr.push(str)
                map.set(temp, existingStr)
            }
            else{
                map.set(temp, [str])
            }
        }
        return Array.from(map.values());
    }
}
