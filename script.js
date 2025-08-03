
function firstNonRepeatedChar(str) {
    // Write your code here

    for (let i = 0; i < str.length - 1; i++)
        for (let j = i; j < str.length; j++) {
            if (str[i] == str[j]) {
                return str[i];
            }
        }
    return null;
}

const input = prompt("Enter a string");

alert(firstNonRepeatedChar(input)); 
