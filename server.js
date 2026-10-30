import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 4173;
const dist = path.join(__dirname, 'dist');

app.use(express.json());
app.use(express.static(dist));

app.get('*', (_request, response) => {
  response.sendFile(path.join(dist, 'index.html'));
});

app.listen(port, () => {
  console.log(`MahakumbhStays is running at http://localhost:${port}`);
});
