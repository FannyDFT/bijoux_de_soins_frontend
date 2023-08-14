export interface ICategoryService {
  description: string;
  id: string;
  image: string;
  name: string;
  parentId: string | null;
  type: string;
  // personalizedText: string;
}
