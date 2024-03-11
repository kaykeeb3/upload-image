// src/routes/imageRoutes.ts

import express from "express";
import { uploadImage, listImages } from "../controllers/imageController";
import { upload } from "../middlewares/imageUploadMiddleware";

const router = express.Router();

// Rota para upload de imagens
router.post("/upload", upload, uploadImage);

// Rota para listar todas as imagens
router.get("/images", listImages);

export default router;
