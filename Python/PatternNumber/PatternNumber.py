"""
---------------------
Create Pattern Number
---------------------
999999999
88888888
...
22
1
"""
class Solution:
  def createPattern(row):
    while ( row > 0):
      for i in range(row):
        print(row, end='')
      row = row - 1
      print('')

########
# Test #
########
Solution.createPattern(9)
print('')
Solution.createPattern(7)