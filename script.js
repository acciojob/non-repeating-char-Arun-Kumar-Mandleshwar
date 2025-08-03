
function firstNonRepeatedChar(str) {
    // Write your code here
    let repeated = null;
    let str1 = str.split('').sort();
    console.log(str1);
    for(let index in str1){
        // console.log(index,str1[index],index+1,str1[index+1]);
        if (str1[Number(index)]===str1[Number(index)+1])
        {
            repeated=str1[Number(index)];
            break;
        }
    }
 
    return repeated;
}

const input = prompt("Enter a string");

alert(firstNonRepeatedChar(input)); 
