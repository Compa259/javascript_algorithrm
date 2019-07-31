/**
 *  B1: Sap xep phan tu tang dan O(nlog(n))
 *  B2: Tinh tong cac so interger tru phan tu dau tien di
 *  Tong nay chinh la tong cac so interger trong top2
 */

 /* B1: Sap xep phan tu tang dan */
let array = [2,6,8,4,100,58,234,74,9,18,43,200]

function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

var sortedArray = quickSort(array, 0, array.length - 1);
console.log(sortedArray);

 /* B2: Tinh tong */

function countSum(array){
    let sum = 0;

    // Run from i = 1, not 0
    for(let i = 1; i < array.length; i++){
        sum += array[i];
    }

    return sum;
}

console.log("sum of integers on top 2", countSum(sortedArray));