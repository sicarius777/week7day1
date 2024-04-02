function countEvenDigits(nums) {
    let count = 0;
    for (let num of nums) {
        if (num.toString().length % 2 === 0) {
            count++;
        }
    }
    return count;
}

const nums1 = [12, 345, 2, 6, 7896];
console.log(countEvenDigits(nums1));

const nums2 = [555, 901, 482, 1771];
console.log(countEvenDigits(nums2));

// really dude the white board problem lol, you slick sometimes.

// code wars problems
https://www.codewars.com/kata/52fba66badcd10859f00097e/solutions/javascript

https://www.codewars.com/kata/5544c7a5cb454edb3c000047/solutions/javascript