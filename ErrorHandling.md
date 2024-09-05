# Error Handling and Debugging in Plain English

This document covers the error handling and debugging features available in Plain English.

## Error Handling

### ERRORS

System variable that contains information about errors that have occurred during script execution.

- It's an array that stores details about each error
- Each error entry in the array contains:
  - Error number
  - Error message
  - Line number where the error occurred
- The ERRORS array is cleared at the beginning of each script execution
- You can add custom error information to the ERRORS array using the LOGMESSAGE command

Usage:
- To check if any errors have occurred: `IF ERRORS.COUNT > 0 THEN ...`
- To access specific error information:
  - `ERRORS[1].NUMBER`: Gets the error number of the first error
  - `ERRORS[1].MESSAGE`: Gets the error message of the first error
- ESYSTEM points to the most recent system error

### Failure

System variable that indicates whether the most recent operation or function call has failed.

- Typically used in conditional statements to check if an operation was successful
- Failure is set to True (non-zero) if an operation fails, and False (zero) if it succeeds

Examples of usage:
- `IF Failure THEN ...` (to check if an operation failed)
- `IF NOT Failure THEN ...` (to check if an operation succeeded)

## Debugging

Information about specific debugging tools or techniques is not provided in the current documentation. However, you can use the error handling mechanisms described above to help with debugging your Plain English scripts.

Some general debugging tips:
1. Use PRINT statements to output variable values at different points in your script.
2. Check the ERRORS array after operations that might fail to see if any errors occurred.
3. Use the Failure variable to check the success of individual operations.
4. Break down complex operations into smaller steps to isolate issues.

Note: The exact usage and syntax for each keyword may vary. Always refer to the official Plain English documentation for the most up-to-date and precise usage instructions.