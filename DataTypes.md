# Data Types and Variables in Plain English

This document covers the various data types and variables available in Plain English.

## Numeric Types

### NUMERIC

`NUMERIC` is used to declare variables or points that will hold numeric values.

Syntax: `NUMERIC variableName`

- Used to specify that a variable or point will contain numbers (integers or floating-point values)
- NUMERIC variables can hold both whole numbers and decimal numbers
- The precision and range of NUMERIC values may depend on the system implementation
- NUMERIC variables can be used in mathematical operations and comparisons
- They can store values from various sources like calculations, input points, or user inputs

Examples:
```plainenglish
NUMERIC Temperature
NUMERIC Pressure
NUMERIC FlowRate
```

Usage examples:
- Mathematical operations: `Result = Temperature * 2`
- Comparisons: `IF Pressure > 100 THEN ...`
- Storing input values: `CurrentTemperature = INPUT(TemperatureSensor)`

Note: The exact precision and range of NUMERIC values should be verified in the specific Plain English implementation being used.

## String Types

### STRING

`STRING` is used to declare variables that will hold text or character data.

Syntax: `STRING variableName`

- Used to specify that a variable will contain a sequence of characters
- STRING variables can hold letters, numbers, symbols, and spaces
- The maximum length of a STRING may depend on the system implementation
- STRING variables can be used for text manipulation, comparisons, and output

Examples:
```plainenglish
STRING Name
STRING Address
STRING Message
```

Usage examples:
- Assigning values: `Name = "John Doe"`
- Concatenation: `FullName = FirstName + " " + LastName`
- Comparisons: `IF UserInput = "YES" THEN ...`

Notes:
- Strings are typically enclosed in double quotes ("") when assigned or compared
- String operations like concatenation, substring extraction, and searching are usually available (see [String Operations](Operations/StringOperations.md) for more details)
- The behavior of strings (case sensitivity, Unicode support, etc.) may vary depending on the specific Plain English implementation

For detailed information on string manipulation and operations, refer to the [String Operations](Operations/StringOperations.md) file.

## Date and Time Types

Date and Time handling is covered in the [Date and Time Operations](Operations/DateTimeOperations.md) file.

## Constants

- `ON`: Represents a boolean true or non-zero value
  - ON is a predefined constant that represents a true or non-zero value
  - It's often used in comparison operations or as a default value
  - ON is equivalent to 1 (one) in numeric contexts
  - It can be used in various contexts, such as setting boolean flags or in conditional statements
  - Example usage: `IF SomeVariable = ON THEN ...`

- `OFF`: Represents a boolean false or zero value
  - OFF is a predefined constant that represents a false or zero value
  - It's often used in comparison operations or as a default value
  - OFF is equivalent to 0 (zero) in numeric contexts
  - It can be used in various contexts, such as setting boolean flags or in conditional statements
  - Example usage: `IF SomeVariable = OFF THEN ...`

ON and OFF are complementary constants, representing opposite boolean states. They can be used interchangeably with their numeric equivalents (1 and 0) in most contexts, but provide more readable and self-documenting code.

- `P`: A predefined constant with multiple uses in Plain English
  - The meaning and usage of P can vary depending on the context and specific implementation
  - In mathematical operations, it might represent the mathematical constant pi (π)
  - In other contexts, it might represent a pointer or reference to the current object or context
  - Examples of usage might include:
    - Mathematical calculations involving circles or angles: `CircumferenceA EQUALS 2 * P * RadiusA`
    - Referencing properties of the current object: `P.Name` (depending on the programming paradigm)
  - The exact behavior and value of P should be verified in the specific Plain English implementation being used

Note: The exact usage and syntax for each keyword may vary. Always refer to the official Plain English documentation for the most up-to-date and precise usage instructions.