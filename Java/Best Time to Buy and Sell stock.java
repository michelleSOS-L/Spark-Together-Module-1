class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        first_buy = prices[0] * -1
        second_buy = prices[0] * -1
        first_profit = 0
        total_profit = 0

        for price in prices:
            first_buy = max(first_buy, price * -1)
            first_profit = max(first_profit, price + first_buy)
            second_buy = max(second_buy, first_profit - price)
            total_profit = max(total_profit, price + second_buy)

        return total_profit