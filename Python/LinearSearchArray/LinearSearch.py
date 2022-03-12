class Solution:
  def LinearSearch(target, data):
    length = len(data)
    for x in range(length):
      if data[x] == target:
        return x
    return -1
    
"""
parameter (target, data)
* target = value to searching index
* data   = list of number
"""
print(Solution.LinearSearch(3, [1, 2, 3, 5, 4]))
print(Solution.LinearSearch(4, [1, 2, 3, 5, 4]))
print(Solution.LinearSearch(1, [1, 2, 3, 5, 4]))
print(Solution.LinearSearch(7, [1, 2, 3, 5, 4]))