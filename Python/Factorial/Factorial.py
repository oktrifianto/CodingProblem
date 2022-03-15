"""
---------
FACTORIAL
---------
0! = 1
1! = 1
2! = 2 x 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
n! = n * (n - 1) * (n - 2)* .... * 1
"""
class Solution:
  def factorial(n):
    if n == 0 or n == 1: return 1
    val = 1 # init value 1
    while ( n > 1):
      val = val * n
      n   = n - 1
    return val

# Test Value #
print(Solution.factorial(0))
print(Solution.factorial(1))
print(Solution.factorial(2))
print(Solution.factorial(3))
print(Solution.factorial(4))
print(Solution.factorial(5))