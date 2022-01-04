/*
PROMPT:

Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
                       // Any permutation of [1,2,3] must be equally likely to be returned.
                       // Example: return [3, 1, 2]
solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]


Constraints:

1 <= nums.length <= 200
-106 <= nums[i] <= 106
All the elements of nums are unique.
At most 5 * 104 calls in total will be made to reset and shuffle.
*/

/*
Input: an array of numbers
Output: depends on the function called
Edge Cases: The array given is empty.

/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
   this.arr = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.arr;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let arr = this.nums.slice();
  const randomNum = (rangeStart, rangeEnd) => {
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1) + rangeStart);
  }
  const swap = (index1, index2) => {
    let temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
  }
  for (let i = 0; i < arr.length * 2; i++) {
    let index1 = randomNum(0, arr.length - 1);
    let index2 = randomNum(0, arr.length - 1);
    swap(index1, index2);
  }
  return arr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// Basic tests:
let obj = new Solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(obj.shuffle());
console.log(obj.shuffle());
console.log(obj.reset());

/*
Bug Log:
1. I was not returning the results of the shuffle
2. I was mutating the original array because I did not create a slice of it as I intended, instead, I created a variable that simply pointed to the same array in memory --oops!
3. I am creating new indices on my array because my random number generator is inclusive at the range end. This is fine, but I am giving the length, not the indices. I can either rewrite the random number generator function or add a - 1 to any length reference in the function.
4. I refactored my code to use less memory by avoiding slicing the original array every time I shuffle. I added a shuffled array to the class that I could use to continually shuffle the deck. However, I forgot to slice off of the original nums parameters, which meant that I had the variables pointing to the same object im memory issue again
*/
