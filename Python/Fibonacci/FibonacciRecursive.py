class Solution:
  def FibRecursive(number):
    if number == 0:
      return 0
    if number == 1:
      return 1
    return Solution.FibRecursive(number - 1) + Solution.FibRecursive(number - 2)

if __name__ == '__main__':
  print(Solution.FibRecursive(0))   # 0
  print(Solution.FibRecursive(1))   # 1
  print(Solution.FibRecursive(2))   # 1
  print(Solution.FibRecursive(3))   # 2