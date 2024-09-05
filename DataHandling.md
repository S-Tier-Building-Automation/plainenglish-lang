# Data Handling and Management in Plain English

This document covers various aspects of data handling and management in Plain English, including arrays, input/output operations, file operations, buffering, and data movement.

## Arrays

### GetArraySize

Gets the size of an array.

Syntax: `GetArraySize(ArrayName)`

- Returns the number of elements in the specified array
- Can be used with both one-dimensional and multi-dimensional arrays
- For multi-dimensional arrays, it returns the total number of elements across all dimensions

Example:
```plainenglish
MyArray[30]
Size = GetArraySize(MyArray)  // Size would be set to 30
```

### SetArraySize

Sets or changes the size of an array.

Syntax: `SetArraySize(ArrayName, NewSize)`

- Used to dynamically resize an array
- If the new size is larger than the current size, the array is expanded and new elements are initialized to default values
- If the new size is smaller than the current size, the array is truncated and excess elements are discarded

Example:
```plainenglish
SetArraySize(MyArray, 50)  // Resizes MyArray to have 50 elements
```

Note: Be cautious when reducing array size, as it can lead to data loss if the array contains important information in the discarded elements.

## Input/Output

### INPUT

Reads data from input points or variables in the system.

Syntax: `INPUT(PointName)`

- Typically used to get values from physical inputs, such as sensors or user interface elements
- Returns the current value of the specified input point
- If the input point is buffered, it returns the most recent value in the buffer

Example:
```plainenglish
Temperature = INPUT(TempSensor1)
```

- Can be used with various types of data, including numeric values, strings, and boolean values
- Often used in control logic to make decisions based on current input states
- The behavior may depend on the configuration of the input point (e.g., scaling, filtering)

### OUTPUT

Writes data to output points or variables in the system.

Syntax: `OUTPUT(PointName, Value)`

- Typically used to set values for physical outputs, such as actuators or user interface elements
- The value being output should match the data type of the output point
- If the output point is buffered, the value may not be immediately written to the physical output

Example:
```plainenglish
OUTPUT(AO1, 75)
```

- Can be used with various types of data, including numeric values, strings, and boolean values
- Often used in control logic to set states or values based on certain conditions
- The behavior may depend on the configuration of the output point (e.g., scaling, buffering)

### PRINT

Displays output, typically to a console or output window.

Syntax: `PRINT expression1 [; expression2; ...]`

- Can print multiple expressions separated by semicolons
- Handles various data types, including numbers, strings, and variables
- By default, adds a newline after the output, unless the statement ends with a semicolon
- Can format numbers with specific decimal places using the # symbol

Examples:
```plainenglish
PRINT "Hello, World!"  // Prints: Hello, World!

PRINT "The value is: "; Value  // Prints the string followed by the value of 'Value'

PRINT "Temperature: "; Temperature; " Pressure: "; Pressure
// Prints multiple values on the same line

PRINT "Formatted number: "; #.## Value
// Prints the value with 2 decimal places, e.g., "Formatted number: 3.14"

PRINT "No newline";  // Doesn't add a newline at the end
PRINT " continued on the same line"
```

### SCAN

Parses input strings and extracts specific data.

Syntax: `SCAN SourceString, FormatString, Variable1, Variable2, ...`

- The FormatString specifies the expected format of the input, using placeholders for different data types
- Variables are used to store the extracted values
- Placeholders in the FormatString:
  - %s: String
  - %d: Integer
  - %f: Float (decimal number)

Example:
```plainenglish
InputString = "John Smith 35 72.5"
SCAN InputString, "%s %s %d %f", FirstName, LastName, Age, Weight

// After execution:
// FirstName = "John"
// LastName = "Smith"
// Age = 35
// Weight = 72.5
```

In this example, SCAN parses the InputString according to the format specified:
- Two strings (%s %s) for the first and last name
- An integer (%d) for the age
- A float (%f) for the weight

The parsed values are then stored in the corresponding variables.

### READ

The READ function or statement is used for reading data, possibly from files or other data sources. However, specific details about its usage and syntax are not available in the current documentation.

It's likely that READ can be used to read data from various types of files or data sources, and may have different versions or parameters for different data types or file formats.

For accurate and up-to-date information about the READ function, please refer to the official Plain English documentation or consult with your system's documentation.

### WriteProperty

Writes a property value. (Specific details not provided in the current documentation)

## File Operations

Information about file operations is not provided in the current documentation.

## Buffering

### Buffered

Indicates that a value is buffered (temporarily stored) for a specific duration.

- Typically used with input and output points to manage data flow and reduce network traffic
- When a point is buffered, its value is stored locally and only sent to or retrieved from the network periodically or when significant changes occur

Example: A buffered input point might update its value every 15 seconds, rather than continuously

### GetBufferSize

Gets the size of the buffer for a buffered point or variable.

Syntax: `GetBufferSize(PointName)`

- Returns the number of values that can be stored in the buffer
- If the point is not buffered, it returns 0

Example:
```plainenglish
BufferSize = GetBufferSize(AO1)
```

Useful for understanding the capacity of the buffer and potentially for iterating through buffered values

### GetBufferedValue

Retrieves the buffered value of a point or variable.

Syntax: `GetBufferedValue(PointName)`

- Returns the most recently buffered value, which may be different from the current actual value
- If the point is not buffered, it returns the current value

Example:
```plainenglish
BufferedValue = GetBufferedValue(AO1)
```

Useful for reducing network traffic and processing load in systems with many data points

## Data Movement

### MOVE

Command used to transfer data from one location to another.

Syntax: `MOVE source TO destination`

- Copies the data from the source to the destination and then clears the source
- Different from a simple assignment because it clears the source after copying

Examples:
1. Moving a single value:
   ```plainenglish
   MOVE Value1 TO Value2
   ```
   This moves the content of Value1 to Value2 and clears Value1

2. Moving array elements:
   ```plainenglish
   MOVE Array1[5] TO Array2[10]
   ```
   This moves the 5th element of Array1 to the 10th element of Array2 and clears the 5th element of Array1

- Useful for efficiently transferring data without creating unnecessary copies
- Care should be taken when using MOVE, as it modifies both the source and destination

Note: The exact usage and syntax for each keyword may vary. Always refer to the official Plain English documentation for the most up-to-date and precise usage instructions.