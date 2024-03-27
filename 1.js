function findLongestWord(str) {
    if (str.trim().length === 0) {
        return false;
    }
    console.log("1st " + str);

    let word = str.split(" ");
    console.log("2nd ", word); // Logging the array of words
    word = word.sort((a,b)=> a.length-b.length); // asscending order
    // word = word.sort((a,b)=> b.length-a.length); // descending order
    console.log("3rd ", word); // Logging the sorted array of words
     console.log(word.at(-1));
    // return word.at[0];// if it's in the decending order
}
findLongestWord("Watch javascript course on thapa technical youtube channel");


// sort function sort the string using the unicode number it is different from the ascii value
/* The trimStart() method removes whitespace from the beginning of a string.

The trimStart() method does not change the original string.

The trimStart() method works like trim(), but removes whitespace only from the start of a string.

point 3
Split a string into characters and return the second character:

const myArray = text.split("");
Use a letter as a separator:

const myArray = text.split("o");
If the separator parameter is omitted, an array with the original string is returned:

const myArray = text.split();
*/