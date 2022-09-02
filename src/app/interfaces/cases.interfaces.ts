export interface ICase {
  id: number;
  label: string;
  description: string;
  images: string[];
  technologies: string[];
  selected: boolean;
  collapsed: boolean;
}
