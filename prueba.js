function feast(beast, dish) {
  let array1 = beast.split(" ");
  let array2 = dish.split(" ");
  let result1 = "";
  let result2 = "";
  let finalResult ;
  for (item in array1) {
    result1 += array1[item][0];
  }

  if (array2.includes(result1)) {

    finalResult = true;
  }
 else {
    finalResult =  false;
  }
  return finalResult
}
console.log(feast("great blue heron", "garlic naan"));
