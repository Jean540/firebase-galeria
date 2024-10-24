"use client";
import { FormEvent, useEffect, useState } from "react";
import * as C from "./App.styles";
import * as Photos from "@/services/photos";
import { Photo } from "@/types/photo";
import { PhotoItem } from "@/components/PhotoItem";

const Page = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };
    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;

    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        setPhotos([...photos, result]);
      }
    }
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={(e) => handleFormSubmit(e)}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading && "Enviando..."}
        </C.UploadForm>

        {loading && (
          <C.ScreenWarning>
            <div className="emoji">🖐🏻</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        )}
        {!loading && photos.length > 0 && (
          <C.PhotoList>
            {photos.map((e, key) => (
              <div>
                <PhotoItem
                  key={key}
                  url={e.url}
                  name={e.name}
                  setPhotos={setPhotos}
                  photos={photos}
                />
              </div>
            ))}
          </C.PhotoList>
        )}
        {!loading && photos.length === 0 && (
          <C.ScreenWarning>
            <div className="emoji">😔</div>
            <div>Sem fotos</div>
          </C.ScreenWarning>
        )}
      </C.Area>
    </C.Container>
  );
};

export default Page;
/* oq que Firebese: 
Firebase é um serviço com varios serviços dentro desse agrupado de serviços como banco de dados, banco de dados para realtime, storage, notificações  
*/
