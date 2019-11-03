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

// for each pass we find the minimum 
// we swap our current position with the minimum
// so that we always have minimum values at the beginning
function selectionSort(ar) {
    for (let i =0; i < ar.length; i++) {
        let min = i
        for (let j = i+ 1; j < ar.length; j++) {
            if (ar[j] < ar[min]) {
                min = j
            }
        }
        let temp = ar[i]
        ar[i] = ar[min]
        ar[min] = temp
    }
    return ar
}


// in insertion sort we move all elements greater
// than the element we are one step ahead 
// in doing so we always are able to insert into 
// an already sorted array
// We shift larger values so as to get the 
// appropriate position for the next item

function insertionSort(ar) {
    for (let i = 1; i < ar.length; i++) {
        let key = ar[i]
        let j = i -1
        while ( j >= 0 && ar[j] > key) {
            ar[j + 1] = ar[j]
            j -= 1
        }
        ar[j + 1] = key
    }
    return ar
}

// we break the list into two parts(left and right)
// and recursively sort the left list
// and solve the right list
// after we merge the lists to obtain a sorted list
function mergeSort(ar) {
    if (ar.length > 1) {
        const mid = Math.ceil(ar.length / 2)
        const left = ar.slice(0, mid)
        const right = ar.slice(mid)

        mergeSort(left)
        mergeSort(right)

        let i = 0
        let j = 0
        let k = 0

        while (i < left.length && j < right.length) {
            if (ar[i] < ar[j]) {
                ar[k] = ar[i]
                i += 1
            }
            else {
                ar[k] = ar[j]
                j += 1
            }
            k += 1
        }

        //handle the remaining items in the left
        while (i < ar.length) {
            ar[k] = ar[i]
            i += 1
            k += 1
        }

        //handle the remaining items in the right
        while (j < ar.length) {
            ar[k] = ar[j]
            j += 1
            k += 1
        }
    }

}

// merge sort and quick sort are all divide and conquer algorithms
// divide and conquer algorithms are all recursive algorithms
// with divide and conquer, in every step you have to reduce 
// or decrease the problem size

// quick sort = quicksort(array less than pivot) + pivot + (array greater than pivot)

function quickSort(ar) {
    if (ar.length < 2) {
        return ar
    }
    else {
        const pivot = ar[0]
        const lessThan = ar.filter((i)=> i < pivot)
        const greaterThan = ar.filter((i)=> i > pivot)
        return quickSort(lessThan).concat([pivot]).concat(quickSort(greaterThan))
    }
   
}




const ar = [4,9,8,0,-5,11,2,4,-9]
console.log(quickSort(ar))