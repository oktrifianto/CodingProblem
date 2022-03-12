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
* data   = list of data (string, integer, etc.)
"""
print(Solution.LinearSearch(3, [1, 2, 3, 5, 4]))  # index 2
print(Solution.LinearSearch(4, [1, 2, 3, 5, 4]))  # index 4
print(Solution.LinearSearch(1, [1, 2, 3, 5, 4]))  # index 0
print(Solution.LinearSearch(7, [1, 2, 3, 5, 4]))  # -1 : not found

print(Solution.LinearSearch("Amelia", ["John", "Susan", "Amelia", "Robert"])) # index 2 (third index)