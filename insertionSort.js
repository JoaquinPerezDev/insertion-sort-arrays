// Write a function that takes in an array of integers and returns a sorted 
// version of that array. Use the Insertion Sort algorithm to sort the array.

// Sample input: array = [8, 5, 2, 9, 5, 6, 3]
// Sample output:        [2, 3, 5, 5, 6, 8, 9]

//Naive approach: The way Insertion Sort works is we divide the input array
//into two subarrays in place. The first subarray should be sorted at all times
//and should start with a length of 1, while the second subarray should be 
//unsorted. Iterate throguh the unsorted subarray, inserting all of its elements
//into the sorted subarray in the correct position by swapping them into place. 
//Eventually, the entire array will be sorted. 


//Time complexity: Because we're running a nested loop, worst case scenario
//will see this algorithm running at O(n^2) quadratic runtime. When considering
//then runtime of an algorithm, we always take into account the runtime of 
//worst case scenario as the default runtime. This is the standard. 

//Space complexity: Given the question asks us to sort in place, this space 
//required for this algorithm will be O(1) constant space. 

//O(n^2) time | O(1) space complexity
function insertionSort(array) {
  for(let i = 1; i < array.length; i++) {
    let j = i;
    while(j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
