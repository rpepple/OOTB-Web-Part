import * as React from 'react';

function OttbWebPartDocuments (props: any){
   return(
     <li>
     <div> <a href={props.link.File.LinkingUri}> {props.link.File.Name}</a> </div>
     <div>Created: {props.link.File.TimeCreated}</div>
     <div>Modified: {props.link.TimeLastModified}</div>
     
     </li>
   )


}

export default OttbWebPartDocuments;