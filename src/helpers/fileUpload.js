export const fileUpload = async (file) => {
  if (!file) throw new Error("no tenemos archivos para subir ");
  const cloudUrl = "https://api.cloudinary.com/v1_1/dd3sndpg3/upload";

  const formData = new FormData();
  formData.append("upload_preset", "journal-app");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("no se pudo dubir la imagen ");

    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);

    throw new Error(error.message);
  }
};
