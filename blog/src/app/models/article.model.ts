export interface Article {
  id: string;
  title: string;
  description: string;
  photoCover: string;
  content?: string;
  author?: string;
  publishDate?: Date;
  category?: string;
  tags?: string[];
}
