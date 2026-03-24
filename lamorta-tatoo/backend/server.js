// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rota de teste
app.get("/api/test", (req, res) => {
  res.json({ message: "API funcionando!" });
});

// Rota GET da galeria (dados fixos por enquanto)
app.get("/api/galeria", (req, res) => {
  const galeria = [
    { id: 1, nome: "Tatuagem Blackwork 1", imagem: "url-da-imagem-1" },
    { id: 2, nome: "Tatuagem Blackwork 2", imagem: "url-da-imagem-2" },
    { id: 3, nome: "Tatuagem Blackwork 3", imagem: "url-da-imagem-3" },
  ];
  res.json(galeria);
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
