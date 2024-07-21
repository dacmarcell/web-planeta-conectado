export type IPost = {
  //TODO: fix attrs below
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  likes: number;
  is_report: boolean;
  created_at: Date;
  updated_at: Date;
}