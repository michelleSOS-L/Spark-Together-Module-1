// Code solution for problem 123. Best time to buy and sell stock III Leetcode
// Solution by: Jordan Barba and Michell
// Time complexity: O(n)
// Space complexity: O(1)

function calcMaxProfit(prices: number[]): number {
    
    let firstBuy: number = -prices[0];   // Money after buying first stock
    let secondBuy: number = -prices[0];  // Money after buying second stock
    let firstProfit: number = 0;         // Profit after first transaction
    let totalProfit: number = 0;         // Final max profit from at most two transactions
    
    for (const price of prices) {
        firstBuy = Math.max(firstBuy, -price); // Keeps the cheapest stock
        firstProfit = Math.max(firstProfit, firstBuy + price); // Takes profit when the stock is higher than the first buy, and the profit is higher than the current profit
        secondBuy = Math.max(secondBuy, firstProfit - price); // Represents the maximum amount of money you have after buying a stock for the second time, considering you've already completed your first transaction (buy and sell).
        totalProfit = Math.max(totalProfit, secondBuy + price); // Keeps the final max profit, by taking into consideration profit of selling the second stock, or staying without buying the second stock. [second_buy takes into consideration the first profit]
    }
    
    return totalProfit;
}

// Mock run
// stocks = [2,3,1,5,3,9]

// 2 -> [-2,0,-2,0]
// 3 -> [-2,1,-2,1]
// 1 -> [-1,1,0,1]
// 5 -> [-1,4,0,5]
// 3 -> [-1,4,1,5]
// 9 -> [-1,8,1,10] total_profit = 10 by making the transaction 1 -> 5 | 3 -> 9