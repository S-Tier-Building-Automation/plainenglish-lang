# String Operations in Plain English

This document covers the string operations available in Plain English.

## String Functions

### ASC

Returns the ASCII code of the first character in a string.

Syntax: `ASC(string)`

Example: `ASC("A")` returns 65

Note: Returns 0 for an empty string

### CHR

Returns the character associated with a specific ASCII code.

Syntax: `CHR(number)`

- The input number should be between 0 and 255 (valid ASCII codes)

Examples:
- `CHR(65)` returns "A"
- `CHR(32)` returns a space character

Note: Characters with ASCII codes below 32 are non-printable control characters

### LEFT

Extracts characters from the left side of a string.

Syntax: `LEFT(string, n)`

- 'string' is the input string
- 'n' is the number of characters to extract from the left
- If 'n' is greater than the length of the string, the entire string is returned
- If 'n' is negative, an empty string is returned

Example: `LEFT("ABCDEFGHIJKLM", 2)` returns "AB"

Useful for extracting prefixes or the beginning portion of strings

### RIGHT

Extracts characters from the right side of a string.

### MID

Extracts a specified number of characters from a string, starting at a specified position.

Syntax: `MID(string, start, length)`

- 'string' is the input string
- 'start' is the starting position (1-based index)
- 'length' is the number of characters to extract
- If 'start' is greater than the length of the string, an empty string is returned
- If 'length' is omitted or exceeds the remaining characters in the string, all characters from the start position to the end of the string are returned

Examples:
1. `MID("ABCDEFGHIJKLMNOP", 5, 3)` returns "EFG"
2. `MID("Plain English", 7, 7)` returns "English"

### LENGTH

Returns the number of characters in a string.

Syntax: `LENGTH(string)`

- Counts all characters, including spaces and special characters
- For an empty string, it returns 0

Examples:
- `LENGTH("ABCDEFGHIJK")` returns 11
- `LENGTH("")` returns 0

Useful for string manipulation, validation, and when you need to know the size of a string

### TAB

Adds tab spaces to a string.

Syntax: `TAB(n)`

- 'n' is the number of tab spaces to add
- Returns a string containing the specified number of tab spaces

Examples:
```plainenglish
PRINT "Name:" + TAB(1) + "John Doe"
PRINT "Address:" + TAB(1) + "123 Main St"
```

This would output:
```
Name:    John Doe
Address:    123 Main St
```

Note: The exact width of a tab space may vary depending on the output device or environment.

### TRUNCATE

Truncates a string to a specified length.

Syntax: `TRUNCATE(string, length)`

- 'string' is the input string to be truncated
- 'length' is the desired length of the truncated string
- If the input string is shorter than or equal to the specified length, it is returned unchanged
- If the input string is longer than the specified length, it is cut off at that length

Examples:
```plainenglish
Result = TRUNCATE("Hello, World!", 5)  // Result will be "Hello"
Result = TRUNCATE("Short", 10)  // Result will be "Short" (unchanged)
```

Useful for limiting the length of strings, for example when displaying text in a fixed-width field or when storing data with length constraints.

Note: The exact usage and syntax for each keyword may vary. Always refer to the official Plain English documentation for the most up-to-date and precise usage instructions.