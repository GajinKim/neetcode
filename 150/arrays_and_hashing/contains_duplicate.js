class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let sortedNums = nums.sort();

        for (let i = 0; i < sortedNums.length - 1; i++) {
            if (sortedNums[i] == sortedNums[i+1]) {
                return true;
            }
        }
        
        return false;
    }

}

let solution = new Solution()

// test cases
console.log(solution.hasDuplicate([1,2,3,4]));

console.log(solution.hasDuplicate([1,3,3,4]));