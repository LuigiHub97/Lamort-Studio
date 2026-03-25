// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin:
      "https://jubilant-space-memory-r7wwpw5x6prhw5pj-3000.app.github.dev",
  }),
);
app.use(express.json());

// Rota de teste
app.get("/api/test", (req, res) => {
  res.json({ message: "API funcionando!" });
});

// Rota GET da galeria (dados fixos por enquanto)
app.get("/api/galeria", async (req, res) => {
  try {
    const resultado = await pool.query("SELECT * FROM galeria");
    res.json(resultado.rows);
  } catch (err) {
    console.error("Erro ao buscar galeria:", err);
    res.status(500).json({ error: "Erro ao buscar galeria" });
  }
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Erro ao conectar no banco:", err);
  } else {
    console.log("Conexão com banco funcionando, hora atual:", res.rows[0]);
  }
});

app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});
