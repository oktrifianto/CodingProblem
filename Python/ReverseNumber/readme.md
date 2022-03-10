# Reverse Number

This program will reverse number (integer)

## Example:
```
Input   : 1234 (int)

Output  : 4321 (int)
```

## Pseudocode

...

## Implementation

1234 -> 4321


init reverse = 0

* Looping 1

remainder  = 1234 % 10 = 4

reverse   = 0 * 10 + 4
          = 4 

number will become 123

* Looping 2

remainder = 123 % 10 = 3

reverse   = 4 * 10 + 3 = 43

number will become 12


* Looping 3

remainder = 12 % 10 = 2

reverse = 43 * 10 + 2 = 430 + 2 = 432

number will become 1

* Looping 4

remainder = 1 % 10 = 1

reverse = 432 + 10 + 1 = 4320 + 1 = 4321

number will become 0 (STOP ITERATION)

-----
return reverse 
reverse = 4321 (√)








