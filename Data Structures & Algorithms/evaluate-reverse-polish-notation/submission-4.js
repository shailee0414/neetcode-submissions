class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const token of tokens) {
            if (token === "+" || token === "-" || token === "*" || token === "/") {
                let value = 0;
                let b = stack.pop();
                let a = stack.pop();

                if (token === "+") {
                    value = a + b;
                } else if (token === "-") {
                    value = a - b;
                } else if (token === "*") {
                    value = a * b;
                } else if (token === "/") {
                    value = Math.trunc(a / b);
                }
                stack.push(value);
            } else {
                stack.push(Number(token));
            }
        }
        return stack[0];
    }
}
