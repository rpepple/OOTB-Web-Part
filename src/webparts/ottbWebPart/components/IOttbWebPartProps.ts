import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { IAddLinkProps } from "./AddLinkPanel/IAddLinkProps";

export interface IOttbWebPartProps {
  listTitle: string;
  context: WebPartContext;
  themeVariant: IReadonlyTheme | undefined;
  webPartSectionSize: number
 
}
