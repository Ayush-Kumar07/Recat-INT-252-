// let result = [];
// let nums = [2, 6, 8, 10, 11, 14, 21, 27];

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 == 0) {
//         nums[i] = nums[i] + 2;
//         result.push(nums[i]);
//     } else {
//         nums[i] = nums[i] + 5;   
//         result.push(nums[i]);
//     }
// }

// console.log(result);

////////////////////////////////////////////////////////////////// USING FOR-EACH
// let result = [];
// let nums = [2, 6, 8, 10, 11, 14, 21, 27];

// nums.forEach((number, index) => {
//     if (index % 2 == 0) {
//         result.push(number + 2);
//     } else {
//         result.push(number + 5);
//     }
// });

// console.log(result);

/////////////////////////////////////////////////////////////////////////// ARRAY-FROM


// let value ="Welcome";
// let result = Array.from(value)
// console.log(result);


//////////////////////////////////////////////////////////////////////////INDEX-OF
 nums = [2, 6, 8, 10, 11, 14, 21, 27];
let result = nums.indexOf(10);
console.log(result);
