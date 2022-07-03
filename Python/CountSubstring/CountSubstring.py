"""
@description
    Search how many subString exist in mainString
@see https://www.hackerrank.com/challenges/find-a-string/
"""
class Solution:
  def count_substring(mainString, subString):
    count = 0
    for i in range(len(mainString)):
      # print(mainString[i])      # only debugging
      if mainString[i:].startswith(subString):    # like slice() method in JS
        # print(mainString[i:])   # only debugging
        count += 1
    return count

print(Solution.count_substring('ABABABC', 'AB')) # 3 => ABABABC, ABABC, ABC
print('---------------')
print(Solution.count_substring('ABABABC', 'ABA')) # 2 => ABABABC, ABABC
print('---------------')
print(Solution.count_substring('ABCDCDC', 'CDC')) # 2 => CDCDC, CDC