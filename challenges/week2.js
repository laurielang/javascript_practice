function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  else if (person.city === "Manchester")
  return true
  else 
  return false 

}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  // Your code here!
  let total = 0;

  arr.forEach(function (animal) {
    const animalType = animal;
    if (animalType === "sheep"){
      total += 1
    }     
  });
  return total 
}


function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  
  else if (person.address.postCode[0].includes("M") && person.address.city === "Manchester")
  return true
  else 
  return false

}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
