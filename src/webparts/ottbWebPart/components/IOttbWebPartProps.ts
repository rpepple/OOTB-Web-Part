import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";

export interface IOttbWebPartProps {
  listTitle: string;
  context: WebPartContext;
  themeVariant: IReadonlyTheme | undefined;
  webPartSectionSize: number
}
