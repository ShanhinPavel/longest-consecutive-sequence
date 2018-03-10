module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let addititonalArray = [];
  let startedValue = 0;
  let counter = 1;
  let length = array.length;

  //test: there is some element in array
  if (length === 0) {
    return length;
  }
  //implement call back function of method sort
   const sortSort = function sortCondition(a, b) {
     return a - b;
   }
  //Sorting array from min to max
   array.sort(sortSort);
   //count elements of sequences
   for (let i = startedValue; length > i; i++) {
    if (array[i + 1] === array[i] + 1) {
      counter++;
    } if (array[i + 1] !== array[i] + 1) {
       startedValue = i;
       addititonalArray.push(counter);
       counter = 1;
       continue;
     } 
   }
   //Sort array again and find max length 
   addititonalArray.sort(sortSort);
   let aLength = addititonalArray.length;
   return addititonalArray[aLength - 1];
}
