export interface ICategoryService {
  createdAt: string;
  description: string;
  id: string;
  image: string;
  name: string;
  parentId: string | null;
  type: string;
  updatedAt: string;
  personalizedText: string;
}
