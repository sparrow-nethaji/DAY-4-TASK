// Print odd numbers in an array
const printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

(function(arr) {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]);

// Convert all the strings to title caps in a string array
const titleCaps = arr => {
    return arr.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
};

(function(arr) {
    const titleCasedArray = arr.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    console.log(titleCasedArray);
})(["hello", "world", "javascript"]);

// Sum of all numbers in an array
const sumArray = arr => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

(function(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);

// Return all the prime numbers in an array
const isPrime = num => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};

const primeNumbers = arr => {
    return arr.filter(num => isPrime(num));
};

(function(arr) {
    const primes = arr.filter(num => isPrime(num));
    console.log(primes);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Return all the palindromes in an array
const isPalindrome = str => {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
};

const palindromeArray = arr => {
    return arr.filter(str => isPalindrome(str));
};

(function(arr) {
    const palindromes = arr.filter(str => isPalindrome(str));
    console.log(palindromes);
})(["level", "hello", "racecar", "world"]);

// Return median of two sorted arrays of the same size
const medianOfSortedArrays = (arr1, arr2) => {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);
    return length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2;
};

(function(arr1, arr2) {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);
    const median = length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2;
    console.log(median);
})([1, 3, 5], [2, 4, 6]);

// Remove duplicates from an array
const removeDuplicates = arr => {
    return [...new Set(arr)];
};

(function(arr) {
    const uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);
})([1, 2, 2, 3, 3, 4, 5]);

// Rotate an array by k times
const rotateArray = (arr, k) => {
    const n = arr.length;
    const rotations = k % n;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
};

(function(arr, k) {
    const n = arr.length;
    const rotations = k % n;
    const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);
