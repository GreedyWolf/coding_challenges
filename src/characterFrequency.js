/*
  Input   : A String
  Output  : An object where key is the character and value is number of occurence
  Example : characterFrequency('apple')       => { a: 1, p: 2, l: 1, e:1 }
            characterFrequency('mississippi') => { m: 1, i: 4, s: 4, p: 2}
*/

function characterFrequency(string){
  //Return empty object if no input
  if(arguments.length === 0) return {};

  //Turn input to string and make it all lower case
  //The ablity to change variable type like this is called Polymorphism
  return (''+string).toLowerCase()
                    //Repalce all spaces with nothing ''
                    //This (/[ ]/g) is a Regular Expression to select every spaces in the string
                    //Regular Expression is used to manipulate string
                    .replace(/[ ]/g,'')
                    //Split each character into an array
                    .split('')
                    //Reduce method will iterate over the array, 
                    //and accumulate each element base on your callback function
                    .reduce(function(accumulator, character){
                      //Tenery Operation is like a one-line if statement
                      //If accumulator doesn't have the character, set accumulator[character] to 1
                      //If accumulator has the character, increment accumulator[character]
                      accumulator[character] = !accumulator[character] ? 1 : accumulator[character] + 1;
                      return accumulator;
                    }, {});
};
