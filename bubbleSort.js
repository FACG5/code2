/**
 * sort an array based on a sorting function that you pass
 * if no sorting function is provided the array will be sorted in an ascending way
 *  
 * @param {Array} unsortedArray 
 * @param {Function} compareFunction 
 * @return {Array}
 */


function bubbleSort(unsortedArray, compareFunction) {

    function defaultCompareFunction(a, b) {
     return a - b;
     }

    var currentMinElement = 0;
    var index = 0;
    var temp = 0;
  
   // {Function} compareFunction Compare function
    compare = compareFunction || defaultCompareFunction;
    
     // loop through the array elements
    for (var i = 0; i < unsortedArray.length; i += 1) {
      index = i;
      currentMinElement = unsortedArray[i];
    // search for the smallest element starting from index i + 1
      for (var j = i + 1; j < unsortedArray.length; j += 1) {
          const currentElement = unsortedArray[j];
        if (compare(currentMinElement, currentElement) > 0) {
          currentMinElement = currentElement;
          index = j;
        }
      }
      
      //swap i elements with the smallest element (if found)
      temp = unsortedArray[i];
      unsortedArray[i] = currentMinElement;
      unsortedArray[index] = temp;
    }
  
    //return sorted unsortedArray
    return unsortedArray;
  }
  
  console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return a - b; }));
  console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return b - a; }));
