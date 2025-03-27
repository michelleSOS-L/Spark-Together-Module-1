function minPatches(nums: number[], n: number): number {
    let patches=0;
    let i=0;
    let min=1;
    while(min<=n){
        if(i<nums.length && nums[i]<=min){
            min+=nums[i];
            i++;
        }else{
            min+=min;
            patches++;
        }
    }
    return patches;
};