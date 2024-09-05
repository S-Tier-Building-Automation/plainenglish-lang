@echo off
echo Updating Schneider Electric Plain English Language Extension

REM Increment version number (you'll need to do this manually in package.json)
echo Please update the version number in package.json before continuing.
pause

REM Package the extension
call npx vsce package

REM Rename the file with a timestamp
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set datetime=%datetime:~0,8%-%datetime:~8,6%
ren plainenglish-lang-*.vsix plainenglish-lang-%datetime%.vsix

echo Extension packaged as plainenglish-lang-%datetime%.vsix
echo Please upload this file to the distribution location and notify the team.
pause