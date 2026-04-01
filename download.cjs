const fs = require('fs');

async function download() {
  const url = 'https://upload.wikimedia.org/wikipedia/commons/4/4b/White_Desert_%28Egypt%29.jpg';
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`Unexpected code: ${res.status}`);
  
  const dest = fs.createWriteStream('src/assets/images/Bahariya-01.jpg');
  
  // Since fetch uses Web Streams in node 18+:
  const { Readable } = require('stream');
  Readable.fromWeb(res.body).pipe(dest);
  
  dest.on('finish', () => console.log('Downloaded successfully!'));
}

download().catch(console.error);
