function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1; 

    while (left <= right){
        let mid = Math.floor((right - left) / 2) + left; // Ensure mid is an integer
        if( nums[mid] == target ){
            return mid;
        }else if(target > nums[mid]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return left;
};
