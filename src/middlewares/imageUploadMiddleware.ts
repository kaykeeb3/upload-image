// src/middlewares/imageUploadMiddleware.ts

import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "public/uploads/", // Define a pasta pública para armazenar as imagens
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limite de tamanho
  },
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error("Somente imagens são permitidas"));
    }
    cb(null, true);
  },
}).single("image");
