class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (const str of s) {
            let len = stack.length - 1;
            if (str == "(" || str == "[" || str == "{") {
                stack.push(str);
            } else if (
                (stack[len] === "(" && str === ")") ||
                (stack[len] === "{" && str === "}") ||
                (stack[len] === "[" && str === "]")
            ) {
                stack.pop()
            }
            else{
                return false
            }
        }
        return stack.length === 0 
    }
}
