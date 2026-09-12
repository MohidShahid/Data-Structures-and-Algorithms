// Brute Force Approach but on test cases it gives TIME EXCEEDED ERROR

var maxSlidingWindow = function(nums, k) {
    let result = [];

    for (let i = 0; i <= nums.length - k; i++) {
        let max = nums[i];

        for (let j = i; j < i + k; j++) {
            if (nums[j] > max) {
                max = nums[j];
            }
        }

        result.push(max);
    }

    return result;
};