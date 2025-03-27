class Solution:
    def shortestPalindrome(self, s: str) -> str:
        if not s:
            return " "

        temp=s+"#"+s[::-1]
        l=[0]*len(temp)
        j=0
        for i in range(1,len(temp)):
            while j>0 and temp[i]!= temp[j]:
                j=l[j-1]

            if temp[i]==temp[j]:
                j+=1
            l[i]=j
            print(l, j, i)
        return s[l[-1]:][::-1]+s

      