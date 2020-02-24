export const getMedian = nums => {
  if (!nums.length || !Array.isArray(nums)) {
    throw new Error('Must supply an Array of Numbers');
  }
  const numsLen = nums.length;
  let median = 0;

  // determine if length of nums is even or odd
  // if even return more left and right of median
  if (numsLen % 2 === 0) {
    median = [nums[numsLen / 2 - 1], nums[numsLen / 2]];
  } else {
    median = [nums[(numsLen - 1) / 2]];
  }

  return median;
};
