
import { mergeStyles } from '@uifabric/merge-styles';
import { Text, Icon,Link } from 'office-ui-fabric-react';
import * as React from 'react';

function OttbWebPart(props: any) {

  let _container = mergeStyles({
    width:246,
    border: "1px solid",
    borderRadius: 2,
    height: 64,
    margin: "0 11px 15px 0",
    padding: 12
  })

  let _innerContainer = mergeStyles({
      display: "flex",
      flexDirection:"row",
      alignItems: "center",
      // backgroundColor:"#ddd",
      height : "100%"
  });
  let _iconContainer = mergeStyles({
      marginRight: 7,
      fontSize: 22
  });
  let _titleContainer = mergeStyles({
    marginRight: 7,
    height: 20,
    maxHeight: 42,
    overflow: "hidden"

  });
  return (
    <div className={_container}>
      <Link href={props.link.Url}>
        <div className={_innerContainer}>
          <div className={_iconContainer}><Icon iconName="Globe"></Icon> </div>
          <div className={_titleContainer}><Text>{props.link.Title} </Text> </div>
        <div>{props.link.Description}</div>
          
        </div>
      </Link>
    </div>
  )


}

export default OttbWebPart;