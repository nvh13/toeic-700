@echo off
cd /d "%~dp0"
where node >nul 2>nul
if %errorlevel%==0 (
  start "TOEIC Local Server" /min cmd /c node "%~dp0local-server.js"
  timeout /t 2 /nobreak >nul
  start "" http://127.0.0.1:8080
  exit /b
)
where py >nul 2>nul
if %errorlevel%==0 (
  start "TOEIC Local Server" /min cmd /c py -m http.server 8080 --bind 127.0.0.1 -d "%~dp0dist"
  timeout /t 2 /nobreak >nul
  start "" http://127.0.0.1:8080
  exit /b
)
where python >nul 2>nul
if %errorlevel%==0 (
  start "TOEIC Local Server" /min cmd /c python -m http.server 8080 --bind 127.0.0.1 -d "%~dp0dist"
  timeout /t 2 /nobreak >nul
  start "" http://127.0.0.1:8080
  exit /b
)
echo Khong tim thay Node.js hoac Python. Dang mo ban truc tiep; microphone co the khong hoat dong.
start "" "%~dp0dist\index.html"
