//creating functions for countion no. of vowels
function countVo(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" ||
            char === "A" ||
            char === "E" ||
            char === "I" ||
            char === "O" ||
            char === "U") {
            count++;
        }
    }
    return count;
}