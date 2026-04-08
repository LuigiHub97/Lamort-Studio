import { useState } from "react";

export function useGallery() {
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(false);

  async function carregarGaleria() {
    try {
      setLoading(true);

      const res = await fetch("http://192.168.0.5:5000/api/galeria");

      if (!res.ok) {
        throw new Error("Erro ao buscar galeria");
      }

      const data = await res.json();
      setImagens(data);
    } catch (err) {
      console.log("Erro galeria:", err);
      setImagens([]);
    } finally {
      setLoading(false);
    }
  }

  return {
    imagens,
    loading,
    carregarGaleria,
  };
}