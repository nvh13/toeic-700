#!/usr/bin/env sh
cd "$(dirname "$0")" || exit 1
if command -v node >/dev/null 2>&1; then
  node local-server.js
elif command -v python3 >/dev/null 2>&1; then
  printf 'Open http://127.0.0.1:8080 in your browser.\n'
  python3 -m http.server 8080 --bind 127.0.0.1 -d dist
else
  printf 'Node.js or Python 3 is required.\n'
  exit 1
fi
