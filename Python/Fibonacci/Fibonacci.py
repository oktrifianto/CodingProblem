class Solution:
  def fibonacci(number):
    if number == 0:
      return 0
    if number == 1:
      return 1

    a = 0
    b = 1
    sum = a + b

    while (number > 1):
      sum = a + b
      a = b
      b = sum
      number = number - 1

    return sum


if __name__ == "__main__":
  print(Solution.fibonacci(0))
  print(Solution.fibonacci(1))
  print(Solution.fibonacci(2))
  print(Solution.fibonacci(3))
  print(Solution.fibonacci(4))