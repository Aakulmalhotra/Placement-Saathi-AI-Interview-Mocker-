@echo off
echo Installing dependencies...
call npm install
echo.
echo Starting Placement Saathi - AI Interview Mocker...
echo Open http://localhost:3000 in your browser
echo Press Ctrl+C to stop the server
echo.
call npm run dev
