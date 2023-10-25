const arr = [5, 7, 2, 9, 5, 6, 3, 1, 8];

minIndex = arr.indexOf(Math.min(...arr)),
maxIndex = arr.indexOf(Math.max(...arr));
 
[arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]]

console.log(arr);