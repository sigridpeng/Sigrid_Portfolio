
export enum Category {
  REAL_LIFE = '實境遊戲',
  LARP = '劇本殺',
  MOBILE = '行動應用',
  OTHER = '其他專案'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  imageUrl: string;
  tags: string[];
  url?: string;
  isAwardWinning?: boolean;
}