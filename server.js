import express from "express";
import path from "path";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;

console.log("🚀 Server is starting...");
console.log(`📡 Listening on port ${PORT}`);

process.on("uncaughtException", (err) => {
  console.error("🔥 Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("⚠️ Unhandled Rejection at:", promise, "reason:", reason);
});

// Servir arquivos estáticos da pasta src/app inteira
app.use(express.static(path.join(__dirname, '/src/app')))

app.use((req, res) => {
  res.status(404);
  res.send("A pagina que você deseja acessar não existe")
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT} 🚀`);
});