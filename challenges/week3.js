function getSquares(nums) {
  if (!nums) throw new Error("nums is required");

  const squaredNums = nums.map(function (n) {
    return n * n
  })
  return squaredNums
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  // Your code here!
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  // Your code here!
  let totalSubjects = 0
  people.forEach(function (subjects){
    subjects.length
    totalSubjects = + 1
  }) 
  return totalSubjects
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  let ingredientContained = false

  menu.forEach(function (dishName){
    dishName.ingredients.forEach(function (individualIngredients){
      if (individualIngredients === ingredient)
      ingredientContained = true
    })
  })
  return ingredientContained
}


function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
