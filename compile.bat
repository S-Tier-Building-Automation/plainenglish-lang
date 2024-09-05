@echo off

cd /d %~dp0

echo Current directory: %CD%
echo Listing directory content:
dir

echo Installing dependencies...
call npm install

echo Installing client dependencies...
cd client
call npm install
call npm install --save-dev @types/node
cd ..

echo Installing server dependencies...
cd server
call npm install
call npm install --save-dev @types/node
cd ..

echo Checking for TypeScript...
if not exist node_modules\.bin\tsc (
    echo TypeScript not found. Installing...
    call npm install typescript --save-dev
)

echo Compiling client...
echo Client tsconfig.json path: %CD%\client\tsconfig.json
if exist %CD%\client\tsconfig.json (
    echo Client tsconfig.json found
) else (
    echo Client tsconfig.json not found
)
call node_modules\.bin\tsc -p %CD%\client\tsconfig.json
if %errorlevel% neq 0 (
    echo Error compiling client
    exit /b %errorlevel%
)

echo Compiling server...
echo Server tsconfig.json path: %CD%\server\tsconfig.json
if exist %CD%\server\tsconfig.json (
    echo Server tsconfig.json found
) else (
    echo Server tsconfig.json not found
)
call node_modules\.bin\tsc -p %CD%\server\tsconfig.json
if %errorlevel% neq 0 (
    echo Error compiling server
    exit /b %errorlevel%
)

echo Compilation completed successfully.