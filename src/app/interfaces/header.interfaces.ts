import { EMenuIds } from "../enums/menu-ids.enum";
import { ILabelId } from "./common.interfaces";

export interface IMenuItem {
  id: EMenuIds;
  label: string;
  expanded: boolean;
  children?: ILabelId[];
}
