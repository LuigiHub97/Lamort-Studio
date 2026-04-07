// backend/server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";
import path from "path";
import multer from "multer";
import fs from "fs";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());

const pastaGaleria = path.join(__dirname, "uploads", "galeria");

if (!fs.existsSync(pastaGaleria)) {
  fs.mkdirSync(pastaGaleria, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, pastaGaleria);
  },
  filename: (req, file, cb) => {
    const nomeUnico = `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;
    cb(null, nomeUnico);
  },
});

const upload = multer({ storage });

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
