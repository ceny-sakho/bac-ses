export interface Devoir {
  id: string;
  title: string;
  description: string;
  date?: string;
  pdfUrl: string;
}

export interface DevoirsData {
  [chapterKey: string]: Devoir[];
}
