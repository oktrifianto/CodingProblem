class Solution:
  def fr(n):
    if n == 0 or n == 1: return 1
    return n * Solution.fr(n - 1)

if __name__ == "__main__":
  print(Solution.fr(0)) # 1
  print(Solution.fr(1)) # 1
  print(Solution.fr(2)) # 2
  print(Solution.fr(3)) # 6 
  print(Solution.fr(4)) # 24 
  print(Solution.fr(5)) # 120