function destroyer(arr, ...args) {
    arr = arr.filter(el => ![...args].includes(el))
    return arr;
  }

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));