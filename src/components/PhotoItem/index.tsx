import * as C from "./styles";

export const PhotoItem = ({ url, name }: { url: string; name: string }) => {
  return (
    <C.Container>
      <img src={url} alt={name} className="img" />
      {name}
    </C.Container>
  );
};
