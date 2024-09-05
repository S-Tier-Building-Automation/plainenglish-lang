# Plain English Keywords and Usage Guide

## Introduction

This guide provides a comprehensive reference for Plain English keywords and their usage. Plain English is a programming language designed to be easily readable and understandable, bridging the gap between natural language and traditional programming syntax.

The information is organized into separate files, each covering a specific aspect of the language. This structure allows for easier navigation and maintenance of the documentation.

## Table of Contents

1. [Data Types and Variables](DataTypes.md)
   - Numeric types
   - String types
   - Date and Time types
   - Constants

2. [Control Flow](ControlFlow.md)
   - Conditional Statements
   - Loops
   - Branching

3. Operations
   - [Arithmetic Operations](Operations/Arithmetic.md)
   - [Logical and Bitwise Operations](Operations/LogicalBitwise.md)
   - [String Operations](Operations/StringOperations.md)
   - [Date and Time Operations](Operations/DateTimeOperations.md)

4. [Functions and Subroutines](FunctionsSubroutines.md)
   - Built-in Functions
   - User-Defined Functions
   - Arguments and Return Values

5. [Data Handling and Management](DataHandling.md)
   - Arrays
   - Input/Output
   - File Operations
   - Buffering
   - Data Movement

6. [Error Handling and Debugging](ErrorHandling.md)

7. [Memory Management](MemoryManagement.md)

8. [Specialized Features](SpecializedFeatures.md)

9. Variable and Function Scope
   - PUBLIC keyword
   - Private (non-PUBLIC) variables and functions

## Variable and Function Scope

### PUBLIC Keyword

The `PUBLIC` keyword is used to declare variables or functions that can be accessed from other scripts or modules.

- Typically used at the beginning of a script to define global variables or functions
- PUBLIC variables and functions are accessible to all scripts that are linked to the script where they are declared
- Non-PUBLIC (private) variables and functions are only accessible within the script where they are declared
- Using PUBLIC allows for better organization of code and sharing of data between different parts of a program

Examples:

1. Declaring a public variable:
   ```plainenglish
   PUBLIC NUMERIC GlobalCounter
   ```

2. Declaring a public function:
   ```plainenglish
   PUBLIC FUNCTION CalculateTotalCost(Quantity, UnitPrice)
     RETURN Quantity * UnitPrice
   END FUNCTION
   ```

3. Using public variables and functions in another script:
   ```plainenglish
   // In another script
   GlobalCounter = GlobalCounter + 1
   TotalCost = CalculateTotalCost(5, 10)
   ```

Note: The exact usage and syntax for the PUBLIC keyword and scope management may vary. Always refer to the official Plain English documentation for the most up-to-date and precise usage instructions.