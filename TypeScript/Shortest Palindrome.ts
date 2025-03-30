class Solution {
    shortestPalindrome(s: string): string {
        function shortestPalindrome(s: string): string {
            if (!s) {
                   return " ";
               }
       
               const temp = s + "#" + s.split("").reverse().join("");
               const lps: number[] = new Array(temp.length).fill(0);
               let j = 0;
       
               for (let i = 1; i < temp.length; i++) {
                   while (j > 0 && temp[i] !== temp[j]) {
                       j = lps[j - 1];
                   }
                   if (temp[i] === temp[j]) {
                       j++;
                   }
                   lps[i] = j;
               }
       
               return s.slice(lps[lps.length - 1]).split("").reverse().join("") + s;
       };
    }
}