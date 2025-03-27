class Solution:
    def minPatches(self, nums: List[int], n: int) -> int:
        patches=0
        i=0
        min=1

        while min<=n:
            if i <len(nums)and nums[i]<=min:
                min+=nums[i]
                i+=1
            else:
                min+=min
                patches=+1
        return patches
        