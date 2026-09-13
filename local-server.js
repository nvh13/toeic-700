const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'dist');
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8'
};

function proxyDictionary(term, res) {
  const upstream = https.get({
    hostname: 'api.datamuse.com',
    family: 4,
    path: `/words?sp=${encodeURIComponent(term)}&qe=sp&md=dp&max=1`,
    headers: { 'User-Agent': 'TOEIC-700-Tracker/1.0', Accept: 'application/json' }
  }, response => {
    const chunks = [];
    response.on('data', chunk => chunks.push(chunk));
    response.on('end', () => {
      const ok = response.statusCode >= 200 && response.statusCode < 300;
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=86400'
      });
      res.end(ok ? Buffer.concat(chunks) : '[]');
    });
  });
  upstream.setTimeout(8000, () => upstream.destroy(new Error('Dictionary request timed out')));
  upstream.on('error', () => {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end('[]');
  });
}

const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname);
  if (pathname.startsWith('/api/dictionary/')) {
    const term = pathname.slice('/api/dictionary/'.length).trim();
    if (!term || term.length > 100) {
      res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ title: 'Invalid dictionary term' }));
      return;
    }
    proxyDictionary(term, res);
    return;
  }
  const requested = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  let file = path.resolve(root, requested);
  if (!file.startsWith(path.resolve(root))) file = path.join(root, 'index.html');
  fs.stat(file, (statError, stat) => {
    if (statError || !stat.isFile()) file = path.join(root, 'index.html');
    fs.readFile(file, (readError, data) => {
      if (readError) { res.writeHead(500); res.end('Unable to load the app.'); return; }
      res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      res.end(data);
    });
  });
});

server.on('error', error => {
  if (error.code === 'EADDRINUSE') {
    console.log('Port 8080 is already in use. Open http://127.0.0.1:8080');
    process.exit(0);
  }
  throw error;
});

server.listen(8080, '127.0.0.1', () => {
  console.log('TOEIC Tracker is running at http://127.0.0.1:8080');
  console.log('Keep this window open while using the app.');
});
