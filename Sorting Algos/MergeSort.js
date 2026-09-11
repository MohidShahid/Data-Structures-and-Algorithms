function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle
    const mid = Math.floor(arr.length / 2);

    // Divide into two halves
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    const result = [];

    let i = 0;
    let j = 0;

    // Compare elements from both arrays
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from left
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Add remaining elements from right
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}


// Example
const arr = [8, 3, 5, 2, 9, 1];

const sortedArray = mergeSort(arr);

console.log(sortedArray);