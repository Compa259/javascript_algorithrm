/**
 *  B1: convert mang dau vao thanh mang chua do dai ki tu tuong ung cua mang dau vao O(n)
 *  B2: Sap xep phan tu tang dan O(nlog(n))
 *  B3: Tim phan tu xuat hien nhieu nhat trong mang O(n)
 *  Phan tu do chinh la do dai xuat hien nhieu nhat cua chuoi trong mang
 */

/* B1: convert mang dau vao thanh mang chua do dai ki tu tuong ung cua mang dau vao */
let string_data_random = ['a', 'assdg', 'assdgasdsdfasdfasdf', 'assdgasdf', 'aw', 'duc', 'asdhfjaksdhfjahsfhaskjdf', 'abc', 'b', 'c', '123', 'aaa', 'bbb'];

let string_data_length = string_data_random.map((element) => {
    return element.length;
})
console.log(string_data_length);

/* B2: Sap xep phan tu tang dan */
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

var sortedArray = quickSort(string_data_length, 0, string_data_length.length - 1);
console.log(sortedArray);

/* B3: Tim phan tu xuat hien nhieu nhat trong mang */
function getLargestNumberElementsAppear(array, arrayLength) {
    let max = 0;
    let maxLength = 0;
    let count = 1; 
    
    for(let i = 0; i < arrayLength; i++){
        if(array[i] == array[i+1]){
            count++;
            if(count > max){
                max = count;
                maxLength = array[i];
            }
        }else {
            count = 1;
        }
    }

    return maxLength;
}

console.log("MAX LENGTH OF STRING IN ARRAY", getLargestNumberElementsAppear(sortedArray, sortedArray.length));