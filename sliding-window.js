// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in an array

function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for(let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i]
  }
  return maxSum
}

// Time Complexity O(N)

// maxSubarraySum([2,3,4,5,6,5,6,5,6,4,3,3,6,7,6,9,8,8,6], 3)