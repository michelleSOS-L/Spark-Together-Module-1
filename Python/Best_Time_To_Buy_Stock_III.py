# Code solution for problem 123. Best time to buy and sell stock III Leetcode
# Solution by: Jordan Barba and Michell
# Time complexity: O(n)
# Space complexity: O(1)

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        first_buy = prices[0] * -1
        second_buy = prices[0] * -1
        first_profit = 0
        total_profit = 0

        for price in prices:
            first_buy = max#(first_buy, price * -1)
            first_profit = max(first_profit, price + first_buy)
            second_buy = max(second_buy, first_profit - price)
            total_profit = max(total_profit, price + second_buy)

        return total_profit
    
# Mock run
# stocks = [2,3,1,5,3,9]

# 2 -> [-2,0,-2,0]
# 3 -> [-2,1,-2,1]
# 1 -> [-1,1,0,1]
# 5 -> [-1,4,0,5]
# 3 -> [-1,4,1,5]
# 9 -> [-1,8,1,10] total_profit = 10 by making the transaction 1 -> 5 | 3 -> 9