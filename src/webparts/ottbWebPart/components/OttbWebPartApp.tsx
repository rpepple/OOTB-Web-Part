import * as React from 'react';
import styles from './OttbWebPart.module.scss';
import { IOttbWebPartProps } from './IOttbWebPartProps';
import OttbWebPart from './OttbWebPart';
import {SPHttpClient,SPHttpClientResponse} from '@microsoft/sp-http'
import OttbWebPartDocuments from './OttbWebPartDocuments';
import{Customizer, mergeStyles} from 'office-ui-fabric-react'
import * as Utils from '../../utils'

export default class OttbWebPartApp extends React.Component<IOttbWebPartProps, any> {
  private _client:SPHttpClient = this.props.context.spHttpClient;
  private _webUrl:string = this.props.context.pageContext.web.absoluteUrl;
  private _sectionSize: Number = this.props.webPartSectionSize;

  state={

     items:[],
     documents:[]
  }

  public componentDidMount(){
    this._getQuickLinks();
    this._getDocuments();
  }

  private _getDocuments(){
    let url= this._webUrl+"/_api/web/Lists/getbytitle('Documents')/items?"+
    "$select=File/*&$expand=File";

    Utils.getSPData(this._client, url).then(d=>{
      let data = d.value;
      console.log('Documents',JSON.stringify(data));

      this.setState({
        documents: data
      })


    });
  }
 
  private _getQuickLinks(){
    let url= this._webUrl+"/_api/web/Lists/getbytitle('QuickLinks')/items";

    // console.log("Get quicklinks is called")

    Utils.getSPData(this._client, url).then(d=>{
      let data = d.value;
      this.setState({
        items: data
      })

      console.log(JSON.stringify(data));

    });
  }



  public render(): React.ReactElement<IOttbWebPartProps> {

    let _container= mergeStyles({
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        
    });
    return (
      <Customizer settings={{theme: this.props.themeVariant}}>
      <div className={ styles.ottbWebPart }>
        <h3> Main Component {this._sectionSize}</h3>
        <div className={_container}>
          {this.state.items.map(item => <OttbWebPart link={item}> </OttbWebPart>
        )}
        </div>
        <h3> Documents</h3>
        <div>
          {this.state.documents.map(document=> <OttbWebPartDocuments link={document} ></OttbWebPartDocuments>)}  
          </div>
      </div>
      </Customizer>
    );
  }
}
