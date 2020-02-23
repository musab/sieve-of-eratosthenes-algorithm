export const getMedian = nums => {
  const numsLen = nums.length;
  let median = 0;

  // determine if length of nums is even or odd
  if (numsLen % 2 === 0) {
    median = [nums[numsLen / 2 - 1], nums[numsLen / 2]];
  } else {
    median = nums[(numsLen - 1) / 2];
  }

  return median;
};
