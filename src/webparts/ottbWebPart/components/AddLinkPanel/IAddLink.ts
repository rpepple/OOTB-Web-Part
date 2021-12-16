import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { IAddLinkProps } from "./IAddLinkProps";

export interface IAddLinks {

    buttonTitle: string;
    HandleAddLink(link: IAddLinkProps):any;
}