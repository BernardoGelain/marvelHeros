export type Comic = {
  characters: {
    available: number;
    collectionURI: string;
    items: {
      name: string;
      resourceURI: string;
    };
  };
  collectedIssues: {
    name: string;
    resourceURI: string;
  };
  id: number;
  prices: {
    type: string;
    price: number;
  };
  format: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  title: string;
  urls: {
    type: string;
    url: string;
  };
};
