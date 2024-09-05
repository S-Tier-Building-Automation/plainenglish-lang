# Arithmetic Operations in Plain English

This document covers the arithmetic operations and mathematical functions available in Plain English.

## Basic Arithmetic Operations

### PLUS

Addition operator.

Syntax: `value1 PLUS value2 [PLUS value3 ...]`

- Used to add two or more values together
- Can be used with numeric values and potentially with other data types (like strings for concatenation, though this isn't explicitly confirmed)

Examples:
- Simple addition: `Result = 5 PLUS 3` (Result will be 8)
- Multiple terms: `Total = Value1 PLUS Value2 PLUS Value3`

### MINUS

Subtraction operation.

### DIVIDED BY

Division operation.

Syntax: `value1 DIVIDED BY value2`

Examples:
- `24 DIVIDED BY 3` returns 8
- `25 DIVIDED BY 2` returns 12.5

### TIMES

Multiplication operation.

Syntax: `value1 TIMES value2 [TIMES value3 ...]`

- Used to multiply two or more values together
- Can be used with numeric values

Examples:
- Simple multiplication: `Result = 5 TIMES 3` (Result will be 15)
- Multiple factors: `Product = Value1 TIMES Value2 TIMES Value3`

## Advanced Mathematical Functions

### ABS

Returns the absolute value of a number.

Syntax: `ABS(number)`

Example: `ABS(-2)` returns 2

### EXPONENTIAL

Exponential function.

Syntax: `EXPONENTIAL(number)`

- Returns e raised to the power of the given number
- e is the base of natural logarithms, approximately equal to 2.71828

Examples:
- `EXPONENTIAL(0)` returns 1
- `EXPONENTIAL(1)` returns approximately 2.71828
- `EXPONENTIAL(-1)` returns approximately 0.36788

### FACTORIAL

Factorial calculation.

Syntax: `FACTORIAL(number)`

- Calculates the factorial of a given non-negative integer
- The factorial of n (denoted as n!) is the product of all positive integers from 1 to n
- The input must be a non-negative integer

Examples:
- `FACTORIAL(0)` returns 1 (by definition)
- `FACTORIAL(1)` returns 1
- `FACTORIAL(5)` returns 120 (5 * 4 * 3 * 2 * 1 = 120)

Note: The factorial of large numbers can result in very large values

### FLOOR

Rounds down to the nearest integer.

Syntax: `FLOOR(number)`

- Returns the largest integer less than or equal to the given number

Examples:
- `FLOOR(5.29)` returns 5
- `FLOOR(-11)` returns -11 (since -11 is already an integer)

Note: For negative numbers, FLOOR rounds towards negative infinity

### CEILING

Rounds up to the nearest integer.

Syntax: `CEILING(number)`

- Returns the smallest integer greater than or equal to the given number

Examples:
- `CEILING(2.3)` returns 3
- `CEILING(5.8)` returns 6
- `CEILING(-2.3)` returns -2 (rounds up towards zero for negative numbers)

### ROUND

Rounds a number to the nearest integer.

Syntax: `ROUND(value)`

- Rounds to the nearest whole number
- If the fractional part is exactly 0.5, it rounds up

Examples:
- `ROUND(4.3)` returns 4
- `ROUND(4.5)` returns 5
- `ROUND(4.7)` returns 5
- `ROUND(-4.3)` returns -4
- `ROUND(-4.5)` returns -4
- `ROUND(-4.7)` returns -5

Note the differences between ROUND, CEILING, and FLOOR:
- CEILING always rounds up to the next whole number
- FLOOR always rounds down to the previous whole number
- ROUND rounds to the nearest whole number

### SQRT

Calculates the square root of a number.

Syntax: `SQRT(number)`

- Returns the square root of the given number
- The input must be a non-negative number

Examples:
- `SQRT(4)` returns 2
- `SQRT(9)` returns 3
- `SQRT(2)` returns approximately 1.4142

Note: If a negative number is provided, the behavior may vary depending on the implementation (it might return an error or a complex number).

### LOG

Calculates the logarithm of a number to base 10.

Syntax: `LOG(number)`

- The input must be a positive number (greater than 0)

Example: `LOG(10)` returns 1 (because 10^1 = 10)

Some mathematical relationships:
- 10^(LOG(x)) = x
- LOG(10^x) = x
- LOG(1) = 0
- LOG(10) = 1
- LOG(100) = 2

It's the inverse function of 10^x (10 raised to the power of x)

### LN

Calculates the natural logarithm of a number.

Syntax: `LN(number)`

- The input must be a positive number (greater than 0)
- The natural logarithm is the logarithm to the base e (where e is approximately 2.71828)

Example: `LN(32)` returns approximately 3.4657

Some mathematical relationships:
- EXP(LN(x)) = x
- LN(EXP(x)) = x
- LN(1) = 0
- LN(e) = 1

It's the inverse function of the exponential function (EXP)

### RANDOM

Generates random numbers.

Syntax: `RANDOM`

- Returns a random integer between 0 and 32,767 (inclusive)
- The function doesn't take any parameters

Examples:
1. Generate a random number:
   ```plainenglish
   RandomValue = RANDOM
   ```

2. Generate a random number in a specific range (e.g., 1 to 10):
   ```plainenglish
   RandomNumber = (RANDOM DIVIDED BY 3276) PLUS 1
   ```
   This will generate a random number between 1 and 10 (inclusive)

Note: The RANDOM function generates pseudo-random numbers. For truly random sequences, you may need to seed the random number generator (if supported by your Plain English implementation).

Note: The exact usage and syntax for each keyword may vary. Always refer to the official Plain English documentation for the most up-to-date and precise usage instructions.