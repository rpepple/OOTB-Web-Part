import {SPHttpClient,SPHttpClientResponse} from '@microsoft/sp-http'
import { SectionSizesEnum } from './ottbWebPart/components/SectionSizesEnum';


 export async function getSPData(client:SPHttpClient, url: string):Promise<any>{
    let response:SPHttpClientResponse= await client.get(url,SPHttpClient.configurations.v1);
    let data = response.json();
    return data
  }

  export function getWebPartSectionSize(width: number) : SectionSizesEnum{
    if(width < 300) return SectionSizesEnum.small

    if(width < 400) return SectionSizesEnum.medium50

    if(width < 500) return SectionSizesEnum.medium50

    if(width < 800) return SectionSizesEnum.large

    return SectionSizesEnum.jumbo
  }