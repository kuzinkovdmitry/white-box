import { EMenuIds } from 'src/app/enums/menu-ids.enum';

export interface IFooterMenuItem {
  id: EMenuIds;
  label: string;
  key: string;
}
