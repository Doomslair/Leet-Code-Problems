/* Prompt

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Return a list of integers representing the size of these parts.



Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
Example 2:

Input: s = "eccbbbbdec"
Output: [10]


Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number[]}
 */
// input: a string of lowercase english characters between 1 and 500
// output: a list of integers representing the side of the parts
// c
// edge cases: string of size 1, all characters are the same, the partition can not be split

var partitionLabels = function (s) {
  // declare variable named resArr and set it equal to an empty array
  let resArr = [];
  // declare variable named partitionIndex and set it equal to zero
  let partitionIndex = 0;
  // declare a variable named partition with parameter startIndex and have it equal a function where you:
  const partition = (startIndex) => {
    // set the last index of the letter at startIndex to partitionIndex
    partitionIndex = s.lastIndexOf(s.charAt(startIndex));
    // for every letter before the current partitionIndex
    for (let i = startIndex; i < partitionIndex; i++) {
      // if the last index of the current letter is greater than the partitionIndex
      if (s.lastIndexOf(s.charAt(i)) > partitionIndex) {
        // then set the partitionIndex to that index
        partitionIndex = s.lastIndexOf(s.charAt(i));
      }
    }
    // push onto resArr partitionIndex plus one
    resArr.push(partitionIndex + 1 - startIndex);
    // if the partitionIndex plus one is equal to the s's length,
    if (partitionIndex + 1 >= s.length) {
      // return resArr
      return resArr;
      // otherwise
    } else {
      // call partition with parameter startIndex equal to partitionIndex
      partition(partitionIndex + 1);
    }
  }
  // call partition with parameter startIndex equal to 0
  partition(0);
  // return resArr
  return resArr;
};

// Basic Tests
let string = "ababcbacadefegdehijhklij";
console.log(partitionLabels(string));
string = "eccbbbbdec";
console.log(partitionLabels(string));

/* Optimization Opportunities
  Naive solution will go over all letters and run last index on it, even if that letter's last index is already known

  Runtime: 94 ms, faster than 31.81% of JavaScript online submissions for Partition Labels.
  Memory Usage: 39.6 MB, less than 93.90% of JavaScript online submissions for Partition Labels
*/

/* Bug Log
  When I am pushing the partition index I am putting on the array what the partition's index is, when I am supposed to put onto the array what the partition's size is.
*/

