/*
  Input   : A String
  Output  : An object where key is the character and value is number of occurence
  Example : characterFrequency('apple')       => { a: 1, p: 2, l: 1, e:1 }
            characterFrequency('mississippi') => { m: 1, i: 4, s: 4, p: 2}
*/

function characterFrequency(string){
  //Start Here
  var str = '' + string;
  str = str.toLowerCase();
  var words = {};
  for( var i = 0; i < str.length; i++ ){
    //check letter to see if it's in object
    if(str[i] !== " "){

      if(words[str[i]] !== undefined){
        //if true, increase count by 1
        words[str[i]]++;
      } else{
        //else, add new letter, increase count by 1
        words[str[i]] = 1;
      }

    }
  }
  //arguments
  if( arguments.length === 0 ){
    return {};
  }
  return words;
};


