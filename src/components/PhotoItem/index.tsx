import { deletePhoto } from "@/services/photos";
import * as C from "./styles";
import { Photo } from "@/types/photo";

type Props = {
  url: string;
  name: string;
  setPhotos: (photo: Photo[]) => void;
  photos: Photo[];
};

export const PhotoItem = ({ url, name, setPhotos, photos }: Props) => {
  const handleDeletePhoto = async (url: string) => {
    await deletePhoto(url).then((res) =>
      setPhotos(photos.filter((p) => p.url != url))
    );
  };

  return (
    <C.Container>
      <div>
        <img src={url} alt={name} className="img" />
        <p>{name}</p>
      </div>
      <button onClick={() => handleDeletePhoto(url)}>Delete</button>
    </C.Container>
  );
};
