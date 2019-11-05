//find an element in a rotated sorted array


function findPivot(arr, start, end) {
    if (end < start) return -1
     if (end === start) return start
    let mid = Math.floor((start + end ) / 2)
   
    if (mid < end && arr[mid] > arr[mid+1]) {
      return mid
    }
    if (mid > start && arr[mid] < arr[mid-1]) {
      return mid -1
    }
    if (arr[start] >= arr[mid]) {
      return findPivot(arr, start, mid-1)
    }
    return findPivot(arr, mid+1, end)
  }
  
  function binarySearch(arr, start, end, key) {
      if (end < start) return -1
      
      let mid = Math.floor((start + end) / 2)
      if (arr[mid] === key) {
          return mid
      }
      if (key > arr[mid]) {
          return binarySearch(arr, mid+1, end, key)
      }
      return  binarySearch(arr, start, mid-1, key)
  }
  
  var search = function(nums, target) {
      
      const pivot = findPivot(nums, 0, nums.length-1)
      if (pivot === -1) return -1
      if (nums[pivot] === target) return pivot
      
      if (target >= nums[0]) {
          return binarySearch(nums, 0, pivot-1, target)
      }
      return binarySearch(nums, pivot+1, nums.length-1, target)
      
  };