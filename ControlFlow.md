# Control Flow in Plain English

This document covers the control flow structures available in Plain English.

## Conditional Statements

### IF...THEN...ELSE

Used for conditional execution.

Syntax: `IF condition THEN action1 [ELSE action2]`

- The condition must evaluate to a numeric value (0 is false, non-zero is true)
- ELSE clause is optional
- Multiple statements can be executed in THEN and ELSE blocks
- IF statements can be nested

### SELECT CASE

Used for multiple conditional branches.

Example: `SELECT CASE variable ... (case statements) ... END SELECT`

## Loops

### FOR...NEXT

Used for iterative loops with a counter.

Syntax: `FOR variable FROM start TO end [BY step] ... NEXT`

- 'variable' is the loop counter
- 'start' is the initial value of the counter
- 'end' is the final value of the counter
- 'step' is optional and specifies the increment (or decrement) of the counter (default is 1)
- The loop continues as long as the counter is less than or equal to the end value (for positive step) or greater than or equal to the end value (for negative step)
- NEXT marks the end of the loop
- FOR loops can be nested

Examples:
```plainenglish
FOR Count FROM 1 TO 5
  [statements]
NEXT

FOR Count FROM 10 TO 0 BY -2
  [statements]
NEXT
```

- You can use BREAK to exit the loop prematurely
- You can use CONTINUE to skip the rest of the current iteration and move to the next one

### WHILE

Used for conditional loops.

Syntax: `WHILE condition ... END WHILE`

- The condition is evaluated before each iteration
- The loop continues as long as the condition is true (non-zero)
- Ensure the condition will eventually become false to avoid infinite loops
- More flexible than FOR loops for situations with unknown iteration counts

### Repeat...Until

Used for loops that run at least once.

Example: `Repeat ... Until condition`

## Branching

### GOTO

Used for unconditional branching.

Syntax: `GOTO LabelName`

- Causes the program to jump to a specified label
- Labels are defined by placing them on a line by themselves, followed by a colon (:)
- Can jump forward or backward in the code
- Often used in conjunction with conditional statements to create more complex control flows
- While useful in certain situations, it's generally recommended to use structured programming constructs instead
- Commonly used in error handling or to break out of nested loops

Example:
```plainenglish
IF Temperature > 100 THEN
  GOTO HighTemp
END IF

// Some code here

HighTemp:
  PRINT "Temperature is too high!"
```

### BASEDON...GOTO

Allows execution to jump to different labels based on the value of an expression.

Syntax:
```plainenglish
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
```plainenglish
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

### CONTINUE

Skips the rest of the current iteration and moves to the next iteration of a loop.

Syntax: `CONTINUE`

- Used within FOR...NEXT, REPEAT...UNTIL, or WHILE...END WHILE loops
- Often used with conditional statements to skip certain iterations based on specific conditions

Example:
```plainenglish
FOR Count FROM 1 TO 20
  IF Count < 5 THEN
    CONTINUE
  END IF
  PRINT Count
NEXT
```
This loop will only print numbers from 5 to 20, skipping the first four iterations.

### BREAK

Exits a loop prematurely.

Syntax: `BREAK`

- Used to immediately exit FROM...NEXT, REPEAT...UNTIL, or WHILE...END WHILE loops
- When BREAK is executed, the program continues with the first statement after the end of the loop

Example:
```plainenglish
FOR Count FROM 1 TO 20
  IF Count EQUALS 5 THEN
    BREAK
  END IF
NEXT
```
In this example, the loop will exit when Count reaches 5, instead of continuing to 20.

### TURN

Used to change the state of a boolean variable or flag.

Syntax: `TURN variable ON` or `TURN variable OFF`

- Changes the value of a boolean variable to ON (true) or OFF (false)
- Typically used with boolean flags or switches in the program

Examples:
```plainenglish
TURN LightsOn ON
TURN EngineRunning OFF
```

This provides a more readable way to set boolean values compared to direct assignment.

## Execution Control

### WAIT

Pauses the execution of the program for a specified duration.

Syntax: `WAIT duration`

- 'duration' is specified in seconds
- The program will pause execution for the specified number of seconds before continuing
- Useful for introducing delays, timing operations, or controlling the pace of execution

Examples:
```plainenglish
WAIT 5  // Waits for 5 seconds
WAIT 0.5  // Waits for half a second
```

Note: The exact behavior of WAIT may depend on the system's timer resolution and scheduling. For very precise timing, additional measures might be necessary.

Note: The exact usage and syntax for each keyword may vary. Always refer to the official Plain English documentation for the most up-to-date and precise usage instructions.