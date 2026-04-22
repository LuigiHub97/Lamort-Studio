import { useState } from "react";

export function useGallery() {
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(false);

  async function carregarGaleria() {
    try {
      setLoading(true);

      const apiUrl = process.env.REACT_APP_API_URL || "https://lamort-api.onrender.com/";
      const res = await fetch(`${apiUrl}/api/galeria`);

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