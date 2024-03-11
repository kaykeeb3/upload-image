// src/index.ts

import express from "express";
import imageRoutes from "./routes/imageRoutes";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "public"))); // Configura a pasta pública para servir arquivos estáticos
app.use("/api", imageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
