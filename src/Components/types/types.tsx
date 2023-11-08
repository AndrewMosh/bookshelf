interface VolumeInfo {
  title: string;
  authors: string[];
  allowAnonLogging: boolean;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  imageLinks: {
    thumbnail?: string;
    smallThumbnail?: string;
    // Другие свойства, если есть
  };
  industryIdentifiers: {
    type: string;
    identifier: string;
  }[];
  infoLink: string;
  language: string;
  maturityRating: string;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  readingModes: {
    text: boolean;
    image: boolean;
  };
  // Другие свойства, если есть
}
export interface Item {
  kind: string;
  id: string;
  etag: string;
  volumeInfo: VolumeInfo;
  // Другие свойства
}
export interface Data {
  kind: string;
  totalItems: number;
  items: Item[];
}
