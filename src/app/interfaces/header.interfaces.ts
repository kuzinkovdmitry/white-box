import { ILabelId } from "./common.interfaces";

export interface IMenuItem {
  id: string;
  label: string;
  expanded: boolean;
  children?: ILabelId[];
}
