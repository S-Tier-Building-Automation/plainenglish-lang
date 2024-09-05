# Logical and Bitwise Operations in Plain English

This document covers the logical and bitwise operations available in Plain English.

## Logical Operators

### AND

Logical AND operator.

Syntax: `expression1 AND expression2 [AND expression3 ...]`

- Returns true if all operands are true (non-zero)
- Evaluates from left to right and stops at the first false (zero) value

Example:
```plainenglish
IF 5 > 3 AND 2 < 4 THEN
  PRINT "Both conditions are true"
END IF
```

### OR

Logical OR operator.

Syntax: `expression1 OR expression2 [OR expression3 ...]`

- Returns true if any of its operands are true (non-zero)
- Evaluates expressions from left to right and stops as soon as it finds a true condition
- In numeric contexts, OR returns the first non-zero value it encounters, or 0 if all operands are 0
- Can be used with multiple operands
- Often used in conditional statements and for combining multiple conditions

Examples:
```plainenglish
IF Temperature > 100 OR Pressure > 50 THEN
  PRINT "Warning: High temperature or pressure"
END IF

Result = Expression1 OR Expression2 OR Expression3

IF (A = 1 OR A = 2 OR A = 3) AND B > 100 THEN
  // Do something
END IF

X = (Y > 5 OR Z < 0) // X will be 1 if the condition is true, 0 otherwise
```

### NOT

Logical NOT operator that inverts a boolean value.

Syntax: `NOT expression`

- Returns 1 (true) if the expression is 0 (false), and 0 (false) if the expression is non-zero (true)
- Can be used with other logical operators like AND and OR

Example:
```plainenglish
IF NOT OFFLINE THEN
  // This code will execute if OFFLINE is false
END IF
```

### EQUALS

Equality comparison.

Syntax: `value1 EQUALS value2`

- Used to check if two values are equal
- Can be used with numeric values, strings, or other data types
- Returns a boolean value (true for any non-zero value, false for zero)

## Bitwise Operators

### BITAND

Bitwise AND operation.

Syntax: `BITAND(value1, value2)`

- Compares each bit of the first value to the corresponding bit of the second value
- If both bits are 1, the corresponding result bit is set to 1. Otherwise, it's set to 0

Example: `BITAND(12, 10)` returns 8
```
12 in binary: 1100
10 in binary: 1010
Result:       1000 (8 in decimal)
```

### BITNOT

Bitwise NOT operation.

Syntax: `BITNOT(value)`

- Inverts all the bits of the given value (changes 0 to 1 and 1 to 0)
- The result is a 32-bit signed integer

Example: `BITNOT(12)` returns -13
```
12 in binary (32-bit):  00000000000000000000000000001100
Result:                 11111111111111111111111111110011 (-13 in two's complement)
```

### BITOR

Bitwise OR operation.

Syntax: `BITOR(value1, value2)`

- Compares each bit of the first value to the corresponding bit of the second value
- If either bit is 1, the corresponding result bit is set to 1. Otherwise, it's set to 0

Example: `BITOR(12, 11)` returns 15
```
12 in binary: 1100
11 in binary: 1011
Result:       1111 (15 in decimal)
```

### BITXOR

Bitwise XOR (exclusive OR) operation.

Syntax: `BITXOR(value1, value2)`

- Compares each bit of the first value to the corresponding bit of the second value
- If the bits are different, the corresponding result bit is set to 1. If they're the same, it's set to 0

Example: `BITXOR(12, 11)` returns 7
```
12 in binary: 1100
11 in binary: 1011
Result:       0111 (7 in decimal)
```

Note: The exact usage and syntax for each keyword may vary. Always refer to the official Plain English documentation for the most up-to-date and precise usage instructions.