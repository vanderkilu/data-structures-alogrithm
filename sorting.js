// bubble sort is the easiest and slowest 
// sorting algorithm
// it compares every element to every element
// in order to move larger element to the 
// extreme right
// we reduce the array to compare at each pass
function bubbleSort(ar) {
    let len = ar.length - 1
    for (let i = len; i >= 0; i--) {
        for (let j = 0; j <  i; j++) {
            if (ar[j] > ar[j+1]) {
                let temp = ar[j]
                ar[j] = ar[j+1]
                ar[j+1] = temp
            }
        }
    }
    return ar
}

const ar = [4,9,8,0,-5,11,2,4,-9]

console.log(bubbleSort(ar))