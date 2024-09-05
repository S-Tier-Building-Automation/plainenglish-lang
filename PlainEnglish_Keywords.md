# Plain English Keywords and Usage Guide

This document provides a quick reference for Plain English keywords and their usage. Please note that the exact syntax and parameters for each keyword may vary, and this guide is based on the information available.

## Control Flow

### Conditional Statements
- `IF...THEN...ELSE`: Used for conditional execution
  Syntax: `IF condition THEN action1 [ELSE action2]`
  - The condition must evaluate to a numeric value (0 is false, non-zero is true)
  - ELSE clause is optional
  - Multiple statements can be executed in THEN and ELSE blocks
  - IF statements can be nested

- `SELECT CASE`: Used for multiple conditional branches
  Example: `SELECT CASE variable ... (case statements) ... END SELECT`

### Conditional Branching
- `BASEDON...GOTO`: Allows execution to jump to different labels based on the value of an expression
  Syntax:
  ```
  BASEDON expression
    GOTO label1 IF value1
    GOTO label2 IF value2
    ...
    GOTO labelN IF valueN
  END BASEDON
  ```
  - The expression is evaluated once
  - GOTO statements are evaluated in order
  - If a condition is true, the program jumps to the corresponding label
  - If no conditions are true, execution continues after END BASEDON
  Example:
  ```
  BASEDON DayOfWeek
    GOTO Monday IF 1
    GOTO Tuesday IF 2
    GOTO Wednesday IF 3
    GOTO Thursday IF 4
    GOTO Friday IF 5
    GOTO Saturday IF 6
    GOTO Sunday IF 7
  END BASEDON
  ```

### Loops
- `FOR...NEXT`: Used for iterative loops with a counter
  Syntax: `FOR variable FROM start TO end [BY step] ... NEXT`
  - 'variable' is the loop counter
  - 'start' is the initial value of the counter
  - 'end' is the final value of the counter
  - 'step' is optional and specifies the increment (or decrement) of the counter (default is 1)
  - The loop continues as long as the counter is less than or equal to the end value (for positive step) or greater than or equal to the end value (for negative step)
  - NEXT marks the end of the loop
  - FOR loops can be nested
  Examples:
    ```
    FOR Count FROM 1 TO 5
      [statements]
    NEXT

    FOR Count FROM 10 TO 0 BY -2
      [statements]
    NEXT
    ```
  - You can use BREAK to exit the loop prematurely
  - You can use CONTINUE to skip the rest of the current iteration and move to the next one

- `WHILE`: Used for conditional loops
  Syntax: `WHILE condition ... END WHILE`
  - The condition is evaluated before each iteration
  - The loop continues as long as the condition is true (non-zero)
  - Ensure the condition will eventually become false to avoid infinite loops
  - More flexible than FOR loops for situations with unknown iteration counts

- `Repeat...Until`: Used for loops that run at least once
  Example: `Repeat ... Until condition`

### Other Control Flow
- `GOTO`: Used for unconditional branching
  Syntax: `GOTO LabelName`
  - Causes the program to jump to a specified label
  - Labels are defined by placing them on a line by themselves, followed by a colon (:)
  - Can jump forward or backward in the code
  - Often used in conjunction with conditional statements to create more complex control flows
  - While useful in certain situations, it's generally recommended to use structured programming constructs instead
  - Commonly used in error handling or to break out of nested loops
  Example:
    ```
    IF Temperature > 100 THEN
      GOTO HighTemp
    END IF
    
    // Some code here
    
    HighTemp:
      PRINT "Temperature is too high!"
    ```

- `CONTINUE`: Skips the rest of the current iteration and moves to the next iteration of a loop
  Syntax: `CONTINUE`
  - Used within FOR...NEXT, REPEAT...UNTIL, or WHILE...END WHILE loops
  - Often used with conditional statements to skip certain iterations based on specific conditions
  Example:
    ```
    FOR Count FROM 1 TO 20
      IF Count < 5 THEN
        CONTINUE
      END IF
      PRINT Count
    NEXT
    ```
    This loop will only print numbers from 5 to 20, skipping the first four iterations.

- `BREAK`: Exits a loop prematurely
  Syntax: `BREAK`
  - Used to immediately exit FROM...NEXT, REPEAT...UNTIL, or WHILE...END WHILE loops
  - When BREAK is executed, the program continues with the first statement after the end of the loop
  Example:
    ```
    FOR Count FROM 1 TO 20
      IF Count EQUALS 5 THEN
        BREAK
      END IF
    NEXT
    ```
    In this example, the loop will exit when Count reaches 5, instead of continuing to 20.

## Mathematical Operations

### Basic Arithmetic
- `PLUS`: Addition
- `MINUS`: Subtraction
- `DIVIDED BY`: Division
  Syntax: `value1 DIVIDED BY value2`
  Examples:
    - `24 DIVIDED BY 3` returns 8
    - `25 DIVIDED BY 2` returns 12.5
- `TIMES`: Multiplication

### Advanced Mathematical Functions
- `ABS`: Returns the absolute value of a number
  Syntax: `ABS(number)`
  Example: `ABS(-2)` returns 2

- `EXPONENTIAL`: Exponential function
  Syntax: `EXPONENTIAL(number)`
  - Returns e raised to the power of the given number
  - e is the base of natural logarithms, approximately equal to 2.71828
  Examples:
    - `EXPONENTIAL(0)` returns 1
    - `EXPONENTIAL(1)` returns approximately 2.71828
    - `EXPONENTIAL(-1)` returns approximately 0.36788

- `FACTORIAL`: Factorial calculation
  Syntax: `FACTORIAL(number)`
  - Calculates the factorial of a given non-negative integer
  - The factorial of n (denoted as n!) is the product of all positive integers from 1 to n
  - The input must be a non-negative integer
  Examples:
    - `FACTORIAL(0)` returns 1 (by definition)
    - `FACTORIAL(1)` returns 1
    - `FACTORIAL(5)` returns 120 (5 * 4 * 3 * 2 * 1 = 120)
  Note: The factorial of large numbers can result in very large values

- `FLOOR`: Rounds down to the nearest integer
  Syntax: `FLOOR(number)`
  - Returns the largest integer less than or equal to the given number
  Examples:
    - `FLOOR(5.29)` returns 5
    - `FLOOR(-11)` returns -11 (since -11 is already an integer)
  Note: For negative numbers, FLOOR rounds towards negative infinity

- `CEILING`: Rounds up to the nearest integer
  Syntax: `CEILING(number)`
  - Returns the smallest integer greater than or equal to the given number
  Examples:
    - `CEILING(2.3)` returns 3
    - `CEILING(5.8)` returns 6
    - `CEILING(-2.3)` returns -2 (rounds up towards zero for negative numbers)

- `LOG`: Calculates the logarithm of a number to base 10
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

- `LN`: Calculates the natural logarithm of a number
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

### Statistical Functions
- `AVERAGE`: Calculates the arithmetic mean of a set of numbers
  Syntax: 
  1. `AVERAGE(value1, value2, ..., valueN)`
  2. `AVERAGE(array)`
  - Can be used with numeric values, numeric points, or arrays containing numeric values
  Examples:
  1. `AVERAGE(1, 2, 3, 4, 5)` returns 3
  2. `AVERAGE([1, 2, 3, 4, 5])` returns 3
  3. For points: If A1, A2, A3, A4, A5 are numeric points with values 1, 2, 3, 4, 5 respectively, then `AVERAGE(A1, A2, A3, A4, A5)` returns 3

- `MAXIMUM`: Finds the maximum value

- `MAXITEM`: Returns the maximum value from a set of numeric values or an array
  Syntax: 
  1. `MAXITEM(value1, value2, ..., valueN)`
  2. `MAXITEM(array)`
  - Can be used with numeric values, numeric points, or arrays containing numeric values
  Examples:
  1. `MAXITEM(1, 2, 3, 4, 5)` returns 5
  2. If A1, A2, A3, A4, A5 are numeric points with values 1, 2, 3, 4, 5 respectively, then `MAXITEM(A1, A2, A3, A4, A5)` returns 5
  3. If MyArray contains values [1, 2, 3, 4, 5], then `MAXITEM(MyArray)` returns 5

- `MINIMUM`: Finds the minimum value

- `MINITEM`: Returns the minimum value from a set of numeric values or an array
  Syntax: 
  1. `MINITEM(value1, value2, ..., valueN)`
  2. `MINITEM(array)`
  - Can be used with numeric values, numeric points, or arrays containing numeric values
  Examples:
  1. `MINITEM(1, 2, 3, 4, 5)` returns 1
  2. If A1, A2, A3, A4, A5 are numeric points with values 1, 2, 3, 4, 5 respectively, then `MINITEM(A1, A2, A3, A4, A5)` returns 1
  3. If MyArray contains values [1, 2, 3, 4, 5], then `MINITEM(MyArray)` returns 1

- `StandardDeviation`: Calculates the standard deviation

### Trigonometric Functions
- `SIN`: Sine function

- `COS`: Cosine function
  Syntax: `COS(angle)`
  - Returns the cosine of the specified angle
  - The input angle must be in radians
  - The return value is between -1 and 1
  Examples:
    - `COS(3.14159265)` returns approximately -1 (cosine of π)
    - `COS(0)` returns 1 (cosine of 0)

- `TAN`: Tangent function

- `ASIN`: Arcsine function (inverse sine)
  Syntax: `ASIN(number)`
  - Returns the angle in radians whose sine is the specified number
  - Input must be between -1 and 1
  Example: `ASIN(1)` returns approximately 1.5708 (π/2 radians or 90 degrees)

- `ACOS`: Arccosine function (inverse cosine)
  Syntax: `ACOS(number)`
  - Returns the angle in radians whose cosine is the specified number
  - Input must be between -1 and 1
  Example: `ACOS(0.5)` returns approximately 1.0472 (in radians)

- `ATAN`: Arctangent function (inverse tangent)
  Syntax: `ATAN(number)`
  - Returns the angle in radians whose tangent is the specified number
  - The returned value is in the range -π/2 to π/2
  Example: `ATAN(0)` returns 0

- `ATAN2`: Two-argument arctangent function
  Syntax: `ATAN2(y, x)`
  - Returns the angle in radians between the positive x-axis and the ray from (0,0) to the point (x,y)
  - The returned value is in the range -π to π
  Examples:
    - `ATAN2(1, 1)` returns approximately 0.7854 (π/4 radians or 45 degrees)
    - `ATAN2(1, -1)` returns approximately 2.3562 (3π/4 radians or 135 degrees)

## Logical and Bitwise Operations

### Logical Operators
- `AND`: Logical AND operator
  Syntax: `expression1 AND expression2 [AND expression3 ...]`
  - Returns true if all operands are true (non-zero)
  - Evaluates from left to right and stops at the first false (zero) value
  Example:
    ```
    IF 5 > 3 AND 2 < 4 THEN
      PRINT "Both conditions are true"
    END IF
    ```

- `OR`: Logical OR
- `NOT`: Logical NOT
- `EQUALS`: Equality comparison
  Syntax: `value1 EQUALS value2`
  - Used to check if two values are equal
  - Can be used with numeric values, strings, or other data types
  - Returns a boolean value (true for any non-zero value, false for zero)

### Bitwise Operators
- `BITAND`: Bitwise AND operation
  Syntax: `BITAND(value1, value2)`
  - Compares each bit of the first value to the corresponding bit of the second value
  - If both bits are 1, the corresponding result bit is set to 1. Otherwise, it's set to 0
  Example: `BITAND(12, 10)` returns 8
    ```
    12 in binary: 1100
    10 in binary: 1010
    Result:       1000 (8 in decimal)
    ```

- `BITNOT`: Bitwise NOT operation
  Syntax: `BITNOT(value)`
  - Inverts all the bits of the given value (changes 0 to 1 and 1 to 0)
  - The result is a 32-bit signed integer
  Example: `BITNOT(12)` returns -13
    ```
    12 in binary (32-bit):  00000000000000000000000000001100
    Result:                 11111111111111111111111111110011 (-13 in two's complement)
    ```

- `BITOR`: Bitwise OR operation
  Syntax: `BITOR(value1, value2)`
  - Compares each bit of the first value to the corresponding bit of the second value
  - If either bit is 1, the corresponding result bit is set to 1. Otherwise, it's set to 0
  Example: `BITOR(12, 11)` returns 15
    ```
    12 in binary: 1100
    11 in binary: 1011
    Result:       1111 (15 in decimal)
    ```

- `BITXOR`: Bitwise XOR (exclusive OR) operation
  Syntax: `BITXOR(value1, value2)`
  - Compares each bit of the first value to the corresponding bit of the second value
  - If the bits are different, the corresponding result bit is set to 1. If they're the same, it's set to 0
  Example: `BITXOR(12, 11)` returns 7
    ```
    12 in binary: 1100
    11 in binary: 1011
    Result:       0111 (7 in decimal)
    ```

## String and Character Operations

- `ASC`: Returns the ASCII code of the first character in a string
  Syntax: `ASC(string)`
  Example: `ASC("A")` returns 65
  Note: Returns 0 for an empty string

- `CHR`: Returns the character associated with a specific ASCII code
  Syntax: `CHR(number)`
  - The input number should be between 0 and 255 (valid ASCII codes)
  Examples:
    - `CHR(65)` returns "A"
    - `CHR(32)` returns a space character
  Note: Characters with ASCII codes below 32 are non-printable control characters

- `LEFT`: Extracts characters from the left side of a string
  Syntax: `LEFT(string, n)`
  - 'string' is the input string
  - 'n' is the number of characters to extract from the left
  - If 'n' is greater than the length of the string, the entire string is returned
  - If 'n' is negative, an empty string is returned
  Example: `LEFT("ABCDEFGHIJKLM", 2)` returns "AB"
  - Useful for extracting prefixes or the beginning portion of strings

- `RIGHT`: Extracts characters from the right side of a string

- `MID`: Extracts a specified number of characters from a string, starting at a specified position
  Syntax: `MID(string, start, length)`
  - 'string' is the input string
  - 'start' is the starting position (1-based index)
  - 'length' is the number of characters to extract
  - If 'start' is greater than the length of the string, an empty string is returned
  - If 'length' is omitted or exceeds the remaining characters in the string, all characters from the start position to the end of the string are returned
  Examples:
  1. `MID("ABCDEFGHIJKLMNOP", 5, 3)` returns "EFG"
  2. `MID("Plain English", 7, 7)` returns "English"

- `LENGTH`: Returns the number of characters in a string
  Syntax: `LENGTH(string)`
  - Counts all characters, including spaces and special characters
  - For an empty string, it returns 0
  Examples:
    - `LENGTH("ABCDEFGHIJK")` returns 11
    - `LENGTH("")` returns 0
  - Useful for string manipulation, validation, and when you need to know the size of a string

- `TAB`: Likely used for adding tab spaces
- `TRUNCATE`: Truncates a string

## Input/Output

- `INPUT`: Reads data from input points or variables in the system
  Syntax: `INPUT(PointName)`
  - Typically used to get values from physical inputs, such as sensors or user interface elements
  - Returns the current value of the specified input point
  - If the input point is buffered, it returns the most recent value in the buffer
  Example: 
    ```
    Temperature = INPUT(TempSensor1)
    ```
  - Can be used with various types of data, including numeric values, strings, and boolean values
  - Often used in control logic to make decisions based on current input states
  - The behavior may depend on the configuration of the input point (e.g., scaling, filtering)

- `OUTPUT`: Sends output
- `PRINT`: Displays output
- `READ`: Reads data (specific versions for different file types)
- `WriteProperty`: Writes a property value

## Date and Time Handling

- `DATE`: Works with dates
  Syntax: 
  1. To create a date: `DATE(year, month, day)`
  2. To extract components: `DATE(date, component)`
  - Components can be:
    - YEAR: Returns the year of the date
    - MONTH: Returns the month of the date (1-12)
    - DAY: Returns the day of the month (1-31)
  Examples:
    - `DATE(2023, 5, 15)` creates a date representing May 15, 2023
    - `DATE(CurrentDate, YEAR)` returns the year of the current date
    - `DATE(SomeDate, MONTH)` returns the month of SomeDate

- `DATETIME`: Works with date and time combined
  Syntax:
  1. To create a datetime: `DATETIME(year, month, day, hour, minute, second)`
  2. To extract components: `DATETIME(datetime, component)`
  - Components can be:
    - YEAR: Returns the year
    - MONTH: Returns the month (1-12)
    - DAY: Returns the day of the month (1-31)
    - HOUR: Returns the hour (0-23)
    - MINUTE: Returns the minute (0-59)
    - SECOND: Returns the second (0-59)
  Examples:
    - `DATETIME(2023, 5, 15, 14, 30, 0)` creates a datetime representing May 15, 2023, at 2:30 PM
    - `DATETIME(CurrentDateTime, YEAR)` returns the year of the current datetime
    - `DATETIME(SomeDateTime, HOUR)` returns the hour of SomeDateTime

- `DAYOFMONTH`: Gets the day of the month
  Syntax: `DAYOFMONTH(date)`
  - Can be used with DATE, DATETIME, or other date/time values
  - Returns a number between 1 and 31
  Examples:
    - `DAYOFMONTH(DATE(2023, 5, 15))` returns 15
    - If CurrentDate is May 15, 2023, then `DAYOFMONTH(CurrentDate)` returns 15

- `DAYOFYEAR`: Gets the day of the year
  Syntax: `DAYOFYEAR(date)`
  - Can be used with DATE, DATETIME, or other date/time values
  - Returns a number between 1 and 366 (366 for leap years)
  - January 1st is always day 1, and December 31st is day 365 (or 366 in a leap year)
  Example:
    - `DAYOFYEAR(DATE(2023, 5, 15))` returns 135 (because May 15th is the 135th day of 2023)

- `DIFFTIME`: Calculates the difference between two dates or times
  Syntax: `DIFFTIME(unit, date1, date2)`
  - The 'unit' parameter specifies the unit of the result (SECONDS, MINUTES, HOURS, or DAYS)
  - date1 and date2 can be DATE or DATETIME values
  - Returns the difference between date1 and date2 in the specified unit
  - If date1 is earlier than date2, the result is negative
  Examples:
    - `DIFFTIME(SECONDS, time1, time2)` returns the number of seconds between time1 and time2
    - `DIFFTIME(MINUTES, time1, time2)` returns the number of minutes between time1 and time2
    - `DIFFTIME(HOURS, date1, date2)` returns the number of hours between date1 and date2
    - `DIFFTIME(DAYS, date1, date2)` returns the number of days between date1 and date2

- `HOUR`: Extracts the hour component from a time or datetime value
  Syntax: `HOUR(datetime)`
  - Returns a number between 0 and 23, representing the hour in 24-hour format
  - Works with both time-only and full datetime values
  - If used with a date-only value, it typically returns 0
  Example:
    ```
    CurrentTime = TOD()  // Assumes TOD() returns the current time
    CurrentHour = HOUR(CurrentTime)
    ```
  - Often used in time-based calculations or for scheduling tasks

- `MINUTE`: Extracts the minute component from a time or datetime value
  Syntax: `MINUTE(datetime)`
  - Returns an integer between 0 and 59, representing the minute within the hour
  - Works with both time-only and full datetime values
  Example:
    ```
    CurrentTime = TOD()  // Assumes TOD() returns the current time
    CurrentMinute = MINUTE(CurrentTime)
    ```
  - If used with a date-only value, it typically returns 0
  - Often used in time-based calculations or for scheduling tasks

- `MONTH`: Extracts the month component from a date or datetime value
  Syntax: `MONTH(date)`
  - Returns an integer between 1 and 12, representing the month of the year
  - Works with both date-only and full datetime values
  Example:
    ```
    CurrentDate = TODAY()  // Assumes TODAY() returns the current date
    CurrentMonth = MONTH(CurrentDate)
    ```
  - Useful for date-based calculations, reporting, and scheduling tasks
  - The function returns the following values for each month:
    1: January, 2: February, 3: March, 4: April, 5: May, 6: June,
    7: July, 8: August, 9: September, 10: October, 11: November, 12: December

- `SECOND`: Gets the second
- `YEAR`: Gets the year
- `WEEKDAY`: Gets the day of the week
- `TIMEPIECE`: Likely related to time measurement
- `TOD`: Possibly "Time of Day"
- `WAIT`: Pauses execution for a specified time

## Data Handling

- `NUMERIC`: Keyword used to declare variables or points that will hold numeric values
  Syntax: `NUMERIC variableName`
  - Used to specify that a variable or point will contain numbers (integers or floating-point values)
  - NUMERIC variables can hold both whole numbers and decimal numbers
  - The precision and range of NUMERIC values may depend on the system implementation
  Examples:
    ```
    NUMERIC Temperature
    NUMERIC Pressure
    NUMERIC FlowRate
    ```
  - NUMERIC variables can be used in mathematical operations and comparisons
  - They can store values from various sources like calculations, input points, or user inputs

- `MOVE`: Command used to transfer data from one location to another
  Syntax: `MOVE source TO destination`
  - Copies the data from the source to the destination and then clears the source
  - Different from a simple assignment because it clears the source after copying
  Examples:
    1. Moving a single value:
       ```
       MOVE Value1 TO Value2
       ```
       This moves the content of Value1 to Value2 and clears Value1
    2. Moving array elements:
       ```
       MOVE Array1[5] TO Array2[10]
       ```
       This moves the 5th element of Array1 to the 10th element of Array2 and clears the 5th element of Array1
  - Useful for efficiently transferring data without creating unnecessary copies
  - Care should be taken when using MOVE, as it modifies both the source and destination

- `GetArraySize`: Gets the size of an array
  Syntax: `GetArraySize(ArrayName)`
  - Returns the number of elements in the specified array
  - Can be used with both one-dimensional and multi-dimensional arrays
  - For multi-dimensional arrays, it returns the total number of elements across all dimensions
  Example:
    ```
    MyArray[30]
    Size = GetArraySize(MyArray)  // Size would be set to 30
    ```
- `SetArraySize`: Sets the size of an array

## Data Management

- `Buffered`: Indicates that a value is buffered (temporarily stored) for a specific duration
  - Typically used with input and output points to manage data flow and reduce network traffic
  - When a point is buffered, its value is stored locally and only sent to or retrieved from the network periodically or when significant changes occur
  Example: A buffered input point might update its value every 15 seconds, rather than continuously

## Constants

- `ON`: Likely represents a boolean true or 1
- `OFF`: Likely represents a boolean false or 0
- `P`: Purpose unclear, possibly a predefined constant

## Functions and Subroutines

- `ARG`: Used to access arguments passed to a function or subroutine
  Syntax: `ARG(position)`
  - Position is 1-based (first argument is at position 1)
  Example:
    ```
    FUNCTION MyFunction
      PRINT ARG(1)  // Prints the first argument
      PRINT ARG(2)  // Prints the second argument
    END FUNCTION
    ```

- `RETURN`: Returns a value from a function

## Error Handling

- `ERRORS`: System variable that contains information about errors that have occurred during script execution
  - It's an array that stores details about each error
  - Each error entry in the array contains:
    - Error number
    - Error message
    - Line number where the error occurred
  - The ERRORS array is cleared at the beginning of each script execution
  - You can add custom error information to the ERRORS array using the LOGMESSAGE command
  - To check if any errors have occurred: `IF ERRORS.COUNT > 0 THEN ...`
  - To access specific error information:
    - `ERRORS[1].NUMBER`: Gets the error number of the first error
    - `ERRORS[1].MESSAGE`: Gets the error message of the first error
  - ESYSTEM points to the most recent system error

- `Failure`: System variable that indicates whether the most recent operation or function call has failed
  - Typically used in conditional statements to check if an operation was successful
  - Failure is set to True (non-zero) if an operation fails, and False (zero) if it succeeds
  Examples of usage:
    - `IF Failure THEN ...` (to check if an operation failed)
    - `IF NOT Failure THEN ...` (to check if an operation succeeded)

## Memory Management

- `FREEMEM`: Used to free up memory that was previously allocated
  Syntax: `FREEMEM(variable)`
  - Releases memory that was dynamically allocated during script execution
  - After calling FREEMEM, the memory is returned to the system and should not be accessed again
  - It's good practice to set the variable to NULL after calling FREEMEM to prevent accidental use
  Example usage:
    ```
    FREEMEM(SomeVariable)
    SomeVariable = NULL
    ```

## Modifiers

- `PUBLIC`: Possibly used to define public access to variables or functions

## Specialized Features

- `RANDOM`: Generates random numbers
- `SCAN`: Likely used for input scanning or data processing
- `SEARCH`: Searches for specific data
- `WebService`: Interacts with web services
- `Trendlog`: Likely used for logging trends or data over time

## File and I/O Operations

- `GetBufferSize`: Gets the size of the buffer for a buffered point or variable
  Syntax: `GetBufferSize(PointName)`
  - Returns the number of values that can be stored in the buffer
  - If the point is not buffered, it returns 0
  Example:
    ```
    BufferSize = GetBufferSize(AO1)
    ```
  - Useful for understanding the capacity of the buffer and potentially for iterating through buffered values

- `GetBufferedValue`: Retrieves the buffered value of a point or variable
  Syntax: `GetBufferedValue(PointName)`
  - Returns the most recently buffered value, which may be different from the current actual value
  - If the point is not buffered, it returns the current value
  Example:
    ```
    BufferedValue = GetBufferedValue(AO1)
    ```
  - Useful for reducing network traffic and processing load in systems with many data points

## Miscellaneous

- `TURN`: Possibly used for toggling states
- `MOVE`: Likely used for moving data or cursor

Note: The exact usage and syntax for each keyword may vary. Refer to the official Plain English documentation for precise usage instructions and examples.