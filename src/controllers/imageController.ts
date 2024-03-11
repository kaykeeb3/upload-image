// src/controllers/imageController.ts

import { Request, Response } from "express";
import { createImage, getAllImages } from "../models/image"; // Certifique-se de importar a interface Image corretamente aqui

export const uploadImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Nenhuma imagem enviada" });
    }

    // Salva a URL da imagem no banco de dados
    const imageUrl = req.file.filename;
    const image = await createImage(imageUrl);

    return res.status(201).json({ image });
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export const listImages = async (req: Request, res: Response) => {
  try {
    // Busca todas as imagens do banco de dados
    const images = await getAllImages();
    return res.status(200).json({ images });
  } catch (error) {
    console.error("Erro ao buscar imagens:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};
