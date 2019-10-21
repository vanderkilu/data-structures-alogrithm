function Stack() {
    this.datastore = []
    this.top = 0
    this.peek = peek
    this.push = push
    this.pop = pop
    this.length = length
    this.clear = clear

}

function push(item) {
    this.datastore[this.top++] = item
}
function pop() {
    return this.datastore[--this.top]
}

function length() {
    return this.top
}
function peek() {
    return this.datastore[this.length() - 1]
}
function clear() {
    this.top = 0
}

function balancedParenthesis(str) {
    const s = new Stack()
    let isBalanced = false

    for (let i=0; i < str.length; i++) {
        let char = str[i]

        if (char === '(') {
            s.push(char)
            isBalanced = false
        }
        else if (char === ')' && s.length() > 0) {
            isBalanced = true
            s.pop()
        }
    }

    if (s.length() <= 0 && isBalanced) {
        return true
    }
    else {
        return false
    }
}

function infixToPostfixConversion(exp) {
    const precedence = {
        "^" : 4,
        "*" : 3,
        "/" : 3,
        "-" : 2,
        "+" : 2
    }
    const s = new Stack()
    let postFix = ""
    let isAlphaReg = /[a-zA-Z]/

    for (let i =0; i < exp.length; i++) {
        let char = exp[i]
        if (isAlphaReg.test(char)) {
            postFix += char
        }
        else if (char === "(" ) {
            s.push(char)
        }
        else if (char === ")") {
            while (s.length() > 0 && s.peek() !== "(") {
                postFix += s.pop()
            }
            if (s.length() > 0 && s.peek() === "(") {
                s.pop()
            }
        }
        else {
            while (s.length() > 0 && precedence[char] < precedence[s.peek()]) {
                postFix += s.pop()
            }
            s.push(char)
        }
    }
    while (s.length() > 0) {
        postFix += s.pop()
    }
    return postFix
}

console.log(infixToPostfixConversion("a+b*(c^d-e)^(f+g*h)-i"))