/**
 * @param {number} n
 * @param {number[]} dp
 * @return {number}
 */
var climbStairs = function(n, dp = []) {
    if (n === 1 || n === 2) {
        return n;
    }

    if (dp[n] !== undefined) {
        return dp[n];
    }

    dp[n] = climbStairs(n - 1, dp) + climbStairs(n - 2, dp);

    return dp[n];
};