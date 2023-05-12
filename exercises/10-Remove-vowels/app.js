const rapid = (myString) => {
    // Your code goes here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
  
    for (let i = 0; i < myString.length; i++) {
      const char = myString[i].toLowerCase();
      if (!vowels.includes(char)) {
        result += char.toUpperCase();
      }
    }
  
    return result;
}


// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
