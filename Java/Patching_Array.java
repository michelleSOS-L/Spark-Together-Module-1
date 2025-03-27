class Solution {
    public int minPatches(int[] nums, int n) {
        int patches=0, i=0;
        long min=1;

        while(min<=n){
            if(i<nums.length &&nums[i]<=min){
                min+=nums[i++];
            }else{
                min+=min;
                patches++;
            }
        }
        return patches;
    }
}