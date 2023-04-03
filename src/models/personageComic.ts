export type PersonageComic = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};
