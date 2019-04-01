function capitalize(word) {
  if (word === undefined) { 
     throw new Error("word is required");
  }
  
  return (word[0].toUpperCase() + word.slice(1)) ;
  
}


function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  
  return firstName.charAt(0) + "." + lastName.charAt(0)

}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
return ((originalPrice/100 * vatRate) + originalPrice).toFixed(2) / 1;

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!

 return (originalPrice - (originalPrice/100 * reduction)).toFixed(2) / 1; 

}

function getMiddleCharacter(str) {
  if (str === undefined) {
    throw new Error("str is required");}
  // Add your code here!
  return str.length % 2 ? str.substr(str.length / 2, 1) : str.substr((str.length / 2) - 1, 2);
}


function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) {
    throw new Error("words is required");
  }
  // Add your code here!

  return words.map(function (item) {
    return item.split("").reverse().join("")
    })
  

}

function countLinuxUsers(users) {
  if (users === undefined) {throw new Error("users is required");}
  // Add your code here!
  let total = 0;

  users.forEach(function (user) {
    const machineType = user.type;
    if (machineType === "Linux"){
      total += 1
    }     
  });
  return total 
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  var total = 0, i;
  for (i = 0; i < scores.length; i += 1) {
      total += scores[i];
  }
  return total / (scores.length).toFixed(2) / 1;

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  else if (n % 5 === 0 && n % 3 === 0)
  return "fizzbuzz"
  else if (n % 3 === 0)
  return "fizz"
  else if (n % 5 === 0)
  return "buzz"  
  else if (n % 3 === 1)
  return n
  else if (n % 5 === 1)
  return n
 

  
  // Add your code here!


}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
