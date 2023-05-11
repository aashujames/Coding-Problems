// leetcode
// 1.ordinary approach
var sortColors = function (nums) {
    let p1 = 0,
        p2 = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        p1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let temp = 0;
            p2 = nums[j];
            if (nums[i] > nums[j]) {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};
