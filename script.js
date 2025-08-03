function firstNonRepeatedChar(arr) {
    // Write your code here
    let repeat;
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {
        repeat = false;
        for (let j = 0; j < arr.length ; j++) {
            if (i != j) {
                if (arr[i] == arr[j])
                    repeat = true;
            }
        }
        if (!repeat)
            return arr[i];
    }

    return null;
}
const input = prompt("Enter a string");

alert(firstNonRepeatedChar(input)); 
