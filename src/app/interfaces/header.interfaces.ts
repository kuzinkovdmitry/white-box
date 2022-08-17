export interface IMenuItem {
  id: string;
  label: string;
  expanded: boolean;
  children?: string[];
}
