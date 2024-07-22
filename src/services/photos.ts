import { Photo } from "@/types/photo";
import { storage } from "../libs/firebase";
import {
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { v4 as createId } from "uuid";

export const getAll = async (): Promise<Photo[]> => {
  let list: Photo[] = [];

  const imagesFolder = ref(storage, "images");
  const photoList = await listAll(imagesFolder);

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i]);

    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }

  return list;
};

export const deletePhoto = async (url: string) => {
  // Create a reference to the file to delete
  const desertRef = ref(storage, url);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      return url;
    })
    .catch((error) => {
      new Error("Tipo de arquivo não suportado");
    });

  // return(

  // )
};

export const insert = async (file: File) => {
  if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
    let randomName = createId();
    let newFile = ref(storage, `images/${randomName}`);

    let upload = await uploadBytes(newFile, file);
    let photoUrl = await getDownloadURL(upload.ref);

    return {
      name: upload.ref.name,
      url: photoUrl,
    } as Photo;
  } else {
    return new Error("Tipo de arquivo não suportado");
  }
};
