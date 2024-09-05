# Date and Time Operations in Plain English

This document covers the date and time operations available in Plain English.

## Date and Time Functions

### DATE

Works with dates.

Syntax: 
1. To create a date: `DATE(year, month, day)`
2. To extract components: `DATE(date, component)`

Components can be:
- YEAR: Returns the year of the date
- MONTH: Returns the month of the date (1-12)
- DAY: Returns the day of the month (1-31)

Examples:
- `DATE(2023, 5, 15)` creates a date representing May 15, 2023
- `DATE(CurrentDate, YEAR)` returns the year of the current date
- `DATE(SomeDate, MONTH)` returns the month of SomeDate

### DATETIME

Works with date and time combined.

Syntax:
1. To create a datetime: `DATETIME(year, month, day, hour, minute, second)`
2. To extract components: `DATETIME(datetime, component)`

Components can be:
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

### DAYOFMONTH

Gets the day of the month.

Syntax: `DAYOFMONTH(date)`

- Can be used with DATE, DATETIME, or other date/time values
- Returns a number between 1 and 31

Examples:
- `DAYOFMONTH(DATE(2023, 5, 15))` returns 15
- If CurrentDate is May 15, 2023, then `DAYOFMONTH(CurrentDate)` returns 15

### DAYOFYEAR

Gets the day of the year.

Syntax: `DAYOFYEAR(date)`

- Can be used with DATE, DATETIME, or other date/time values
- Returns a number between 1 and 366 (366 for leap years)
- January 1st is always day 1, and December 31st is day 365 (or 366 in a leap year)

Example:
- `DAYOFYEAR(DATE(2023, 5, 15))` returns 135 (because May 15th is the 135th day of 2023)

### DIFFTIME

Calculates the difference between two dates or times.

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

### HOUR

Extracts the hour component from a time or datetime value.

Syntax: `HOUR(datetime)`

- Returns a number between 0 and 23, representing the hour in 24-hour format
- Works with both time-only and full datetime values
- If used with a date-only value, it typically returns 0

Example:
```plainenglish
CurrentTime = TOD()  // Assumes TOD() returns the current time
CurrentHour = HOUR(CurrentTime)
```

Often used in time-based calculations or for scheduling tasks

### MINUTE

Extracts the minute component from a time or datetime value.

Syntax: `MINUTE(datetime)`

- Returns an integer between 0 and 59, representing the minute within the hour
- Works with both time-only and full datetime values

Example:
```plainenglish
CurrentTime = TOD()  // Assumes TOD() returns the current time
CurrentMinute = MINUTE(CurrentTime)
```

If used with a date-only value, it typically returns 0

Often used in time-based calculations or for scheduling tasks

### MONTH

Extracts the month component from a date or datetime value.

Syntax: `MONTH(date)`

- Returns an integer between 1 and 12, representing the month of the year
- Works with both date-only and full datetime values

Example:
```plainenglish
CurrentDate = TODAY()  // Assumes TODAY() returns the current date
CurrentMonth = MONTH(CurrentDate)
```

Useful for date-based calculations, reporting, and scheduling tasks

The function returns the following values for each month:
1: January, 2: February, 3: March, 4: April, 5: May, 6: June,
7: July, 8: August, 9: September, 10: October, 11: November, 12: December

### SECOND

Extracts the second component from a time or datetime value.

Syntax: `SECOND(datetime)`

- Returns an integer between 0 and 59, representing the second within the minute
- Works with both time-only and full datetime values

Example:
```plainenglish
CurrentTime = TOD()  // Assumes TOD() returns the current time
CurrentSecond = SECOND(CurrentTime)
```

If used with a date-only value, it typically returns 0

Useful for precise time-based calculations or when second-level accuracy is required

### YEAR

Gets the year component from a date or datetime value.

### WEEKDAY

Gets the day of the week from a date or datetime value.

Syntax: `WEEKDAY(date)`

- Returns an integer representing the day of the week
- The return value ranges from 1 (Sunday) to 7 (Saturday)
- Can be used with DATE, DATETIME, or other date/time values

Return values:
1. Sunday
2. Monday
3. Tuesday
4. Wednesday
5. Thursday
6. Friday
7. Saturday

Examples:
```plainenglish
DayNumber = WEEKDAY(DATE(2023, 5, 15))  // Returns 2 (Monday)
IF WEEKDAY(CurrentDate) = 1 OR WEEKDAY(CurrentDate) = 7 THEN
  PRINT "It's the weekend!"
END IF
```

Useful for scheduling, reporting, and conditional logic based on the day of the week.

### TIMEPIECE

A data type or structure for measuring and representing time.

- Can have multiple components such as hours, minutes, seconds, and potentially smaller units
- Used for precise time measurements and calculations
- May be used in conjunction with other time-related functions

Example (hypothetical usage, exact syntax may vary):
```plainenglish
MyTime = TIMEPIECE(12, 30, 45)  // Represents 12 hours, 30 minutes, 45 seconds
Hours = MyTime.HOURS  // Extracts the hours component
Minutes = MyTime.MINUTES  // Extracts the minutes component
Seconds = MyTime.SECONDS  // Extracts the seconds component
```

### TOD

Returns the current Time of Day.

Syntax: `TOD()`

- Returns the current time as a time value (without date information)
- The returned time is typically in 24-hour format
- Can be used with other time-related functions like HOUR, MINUTE, and SECOND

Example:
```plainenglish
CurrentTime = TOD()
CurrentHour = HOUR(CurrentTime)
CurrentMinute = MINUTE(CurrentTime)
CurrentSecond = SECOND(CurrentTime)

PRINT "Current time is: "; CurrentHour; ":"; CurrentMinute; ":"; CurrentSecond
```

Useful for getting the current time for logging, time-based calculations, or scheduling tasks

### WAIT

Pauses execution for a specified time.

Note: The exact usage and syntax for each keyword may vary. Always refer to the official Plain English documentation for the most up-to-date and precise usage instructions.