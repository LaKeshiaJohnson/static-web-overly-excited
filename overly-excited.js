console.log ("hello world!")

// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let output = " ";
let exclaim = "!"

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    for (let i = 0; i < theWordArray.length; i++) {

let currentWord = theWordArray[i];
	output += " " + currentWord;


if ((i + 1)%3 === 0) {
	output += exclaim


exclaim += "!"

}


  console.log(output);
};
      /*Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
}
 
 addExcitement(sentence);


