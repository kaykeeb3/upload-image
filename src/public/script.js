document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("fileInput");
  const uploadButton = document.getElementById("uploadButton");
  const imageContainer = document.getElementById("imageContainer");

  uploadButton.addEventListener("click", async () => {
    const file = fileInput.files[0];
    if (!file) {
      alert("Por favor, selecione uma imagem.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      const imageUrl = data.imageUrl;
      displayImage(imageUrl);
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
      alert("Erro ao fazer upload da imagem. Por favor, tente novamente.");
    }
  });

  function displayImage(imageUrl) {
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageContainer.appendChild(imageElement);
  }
});
