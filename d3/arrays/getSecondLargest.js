function getSecondLargest(nums) {
    // Complete the function
    nums =[... new Set(nums)]
    nums.sort();
    // start from second last element
    // as the largest element is at last
    for (let i = nums.length - 2; i >= 0; i--) {
            // if the element is not
            // equal to largest element
            if (nums[i] != nums[nums.length - 1]) {
                return nums[i];
            }
        }
}

module.exports = getSecondLargest;
