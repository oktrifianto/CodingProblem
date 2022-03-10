"""
==============
Reverse Number
==============
example:
Input : 1234
Output: 4321

"""
class Solution:
  def reverseNumber(val):
    reverse = 0
    while (val > 0):
      remainder   = val % 10
      reverse     = reverse * 10 + remainder
      val         = val // 10
    return reverse

##############
# Test Value #
##############
if __name__ == "__main__":
  print(Solution.reverseNumber(1234))
  print(Solution.reverseNumber(56374))
  print(Solution.reverseNumber(12034))
