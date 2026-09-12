/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
          let subarr = 0;
           let SumArr = [];
           for(let i = 0; i < k; i++){
              subarr += nums[i];  
           }
           SumArr.push(subarr);
          console.log(SumArr);
           for(let j = k; j < nums.length; j++){
              subarr = subarr -  nums[j - k]; // remove the last element of previous subararray;
              subarr = subarr + nums[j];
              SumArr.push(subarr)
              console.log(SumArr);
           }

           return SumArr;
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);


// It returns sum of each subarray we create