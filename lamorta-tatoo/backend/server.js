// backend/server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import multer from "multer";
import fs from "fs";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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

app.get("/api/test", (req, res) => {
  res.json({ message: "API NOVA FUNCIONANDO AGORA" });
});

app.get("/api/galeria", (req, res) => {
  try {
    console.log("PASTA GALERIA:", pastaGaleria);

    const arquivos = fs.readdirSync(pastaGaleria);
    console.log("ARQUIVOS ENCONTRADOS:", arquivos);

    const extensoesValidas = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

    const imagens = arquivos
      .filter((arquivo) =>
        extensoesValidas.includes(path.extname(arquivo).toLowerCase())
      )
      .map((arquivo, index) => ({
        id: index + 1,
        nome: arquivo,
        url: `${req.protocol}://${req.get("host")}/uploads/galeria/${arquivo}`,
      }));

    res.json(imagens);
  } catch (err) {
    console.error("Erro ao buscar galeria:", err);
    res.status(500).json({ error: "Erro ao buscar galeria" });
  }
});

app.post("/api/galeria/upload", upload.single("imagem"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Nenhuma imagem enviada" });
    }

    const imagem = {
      nome: req.file.filename,
      url: `${req.protocol}://${req.get("host")}/uploads/galeria/${req.file.filename}`,
    };

    res.status(201).json({
      message: "Imagem enviada com sucesso!",
      imagem,
    });
  } catch (err) {
    console.error("Erro no upload da imagem:", err);
    res.status(500).json({ error: "Erro ao fazer upload da imagem" });
  }
});

console.log("ANTES DO LISTEN");

app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});