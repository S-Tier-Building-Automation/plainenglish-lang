# Functions and Subroutines in Plain English

This document covers the usage of functions and subroutines in Plain English.

## Built-in Functions

Most built-in functions are covered in their respective operation sections:
- [Arithmetic Operations](Operations/Arithmetic.md)
- [Logical and Bitwise Operations](Operations/LogicalBitwise.md)
- [String Operations](Operations/StringOperations.md)
- [Date and Time Operations](Operations/DateTimeOperations.md)

## User-Defined Functions

Information about defining custom functions is not provided in the current documentation.

## Arguments and Return Values

### ARG

Used to access arguments passed to a function or subroutine.

Syntax: `ARG(position)`

- Position is 1-based (first argument is at position 1)

Example:
```plainenglish
FUNCTION MyFunction
  PRINT ARG(1)  // Prints the first argument
  PRINT ARG(2)  // Prints the second argument
END FUNCTION
```

### RETURN

Used to exit a function or subroutine and optionally return a value.

Syntax: 
1. Without a value: `RETURN`
2. With a value: `RETURN value`

- When used without a value, it simply exits the function or subroutine
- When used with a value, it exits the function and returns the specified value
- RETURN can be used multiple times within a function, typically in different conditional branches

Examples:

1. Returning a value:
```plainenglish
FUNCTION Add(a, b)
  RETURN ARG(1) + ARG(2)
END FUNCTION
```

2. Using RETURN in conditional statements:
```plainenglish
FUNCTION IsPositive(number)
  IF number > 0 THEN
    RETURN TRUE
  ELSE
    RETURN FALSE
  END IF
END FUNCTION
```

3. Early exit from a function:
```plainenglish
FUNCTION ProcessData(data)
  IF data = NOTHING THEN
    RETURN  // Exit the function early if data is empty
  END IF
  
  // Process the data here
  Result = PerformCalculations(data)
  RETURN Result
END FUNCTION
```

Note: The exact usage and syntax for each keyword may vary. Always refer to the official Plain English documentation for the most up-to-date and precise usage instructions.