/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
/* Prompt:
Return the number of tuples you can make that all add up to zero when given 4 interger arrays. You can only access one element in each int array to make any given tuple.
*/

// High level strategy--Naive solution
// Create and store every possible tuple that can be created
// map over the array of tuples and reduce each of these tuples
// for every tuple that reduces to zero, increment tuples count
// return tuples count
/*
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let tuplesCount = 0
  let tuples = [];
  // for every element in the first array
  for (let i = 0; i < nums1.length; i++) {
    // for every element in the second array
    for (let j = 0; j < nums2.length; j++) {
      // for every element in the third array
      for (let k = 0; k < nums3.length; k++) {
        // for every element in the fourth array
        for (let l = 0; l < nums4.length; l++) {
          // create tuples from positions [i][j][k][l] and push them onto tuples
          let arr = [nums1[i], nums2[j], nums3[k], nums4[l]];
          tuples.push(arr);
        }
      }
    }
  }
  // map over tuples, for array in the tuple,
  tuples.map((array) => {
    // call reduce on it and set it equal to result
    let res = array.reduce((previousValue, currentValue) => previousValue + currentValue)
    // if result is equal to zero
    if (res === 0) {
      // increment tuplesCount
      tuplesCount++;
    }
  })
  // return tuplesCount
  return tuplesCount;
};
*/

// Naive solution fails on test 19 because of large input size.
// More Optimized Solution
/*
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  // let tuples count equal 0
  let tuplesCount = 0;
  let validSolutions = [];
  let numSet1 = {};
  let numSet2 = {};
  let numSet3 = {};
  let numSet4 = {};
  // declare instanceTable, taking in an object and an array
  const instanceTable = (obj, arr) => {
    // for each element of the array
    for (let i = 0; i < arr.length; i++) {
      // if the number already exists in the object
      if (obj[arr[i]] === undefined) {
        // set the object at the array value to the array value
        obj[arr[i]] = 1;
        // otherwise
      } else {
        // increment the objects values
        obj[arr[i]]++;
      }
    }
  }
  const findSolutions = (array1, array2, array3, array4) => {
    for (let i = 0; i < array1.length; i++) {
      // for every element in the second array
      for (let j = 0; j < array2.length; j++) {
        // for every element in the third array
        for (let k = 0; k < array3.length; k++) {
          // for every element in the fourth array
          for (let l = 0; l < array4.length; l++) {
            // create tuples from positions [i][j][k][l] and push them onto tuples
            if ((parseInt(array1[i], 10) + parseInt(array2[j], 10) + parseInt(array3[k], 10) + parseInt(array4[l], 10)) === 0) {
              let arr = [array1[i], array2[j], array3[k], array4[l]];
              validSolutions.push(arr);
            }
          }
        }
      }
    }
    return validSolutions;
  }
  // call instance table passing in numSet1 and nums1 in as params
  instanceTable(numSet1, nums1);
  // call instance table passing in numSet2 and nums2 in as params
  instanceTable(numSet2, nums2);
  // call instance table passing in numSet3 and nums3 in as params
  instanceTable(numSet3, nums3);
  // call instance table passing in numSet4 and nums4 in as params
  instanceTable(numSet4, nums4);
  // go through each key of our sets,
  let keySet1 = Object.keys(numSet1);
  let keySet2 = Object.keys(numSet2);
  let keySet3 = Object.keys(numSet3);
  let keySet4 = Object.keys(numSet4);
  validSolutions = findSolutions(keySet1, keySet2, keySet3, keySet4);
  // take each valid solution, and multiply it by the values of each objects key
  validSolutions.map((array) => {
    // increase tuplesCount by that number
    tuplesCount = tuplesCount + (numSet1[array[0]] * numSet2[array[1]] * numSet3[array[2]] * numSet4[array[3]]);
  })
  // return the valid tuples count
  return tuplesCount;
};
*/
// This code timed out, too. Whoops.
// Time to go in the opposite direction and go super simple.
var fourSumCount = function (nums1, nums2, nums3, nums4) {
}


nums1 = [0, 0, 0, 1, 1, 2], nums2 = [0, 0, -1, -2, -1, 2], nums3 = [0, 0, 0, 0, 0, 0], nums4 = [0, 0, 0, 0, 0, 0]
console.log(fourSumCount(nums1, nums2, nums3, nums4));
// look at the [first] element of each array
// if the numbers add up to zero
  // increment tuplesCount
// otherwise
// if the numbers do not add up to zero
// check the last array for a negation number