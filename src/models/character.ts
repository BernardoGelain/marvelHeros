export type Character = {
  comics: {
    available: number;
    collectionURI: string;
  };
  id: number;
  name: string;
  resourceURI: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};
