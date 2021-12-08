
import { mergeStyles } from '@uifabric/merge-styles';
import { Text, Icon,Link } from 'office-ui-fabric-react';
import * as React from 'react';
import styles from './OttbWebPart.module.scss';
import { SectionSizesEnum } from './SectionSizesEnum';

function OttbWebPart(props: any) {

  let _width = "100%";
  let _border = "1px solid";
  let _sectionSize:SectionSizesEnum = props.sectionSizes;

  switch(_sectionSize){
    case SectionSizesEnum.medium50:
      _width = "99%";
      break;

      case SectionSizesEnum.meduim23:
      _width="43%";
      break;

      case SectionSizesEnum.large:
      _width="28.5%%";
      break;

      default:
        _width = "99%";
  }

  // if(_sectionSize == SectionSizesEnum.medium50)
  // {
  //   _width=300;

  // }

  let _container = mergeStyles({
    width:_width,
    border: _border,
    borderRadius: 2,
    height: 35,
    margin: "0 0 15px 0",
    padding: 12
  });

  
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
  let _titleContainer = mergeStyles(styles.textWrapper,{
    marginRight: 7,
    height: 20,
    maxHeight: 42,
    overflow: "hidden",
    

  });
  return (
    <div className={_container}>
      <Link href={props.link.Url}>
        <div className={_innerContainer}>
          <div className={_iconContainer}><Icon iconName="Globe"></Icon> </div>
          <div className={styles.textWrapper+" "+_titleContainer}><Text>{props.link.Title} </Text> </div>
        <div>{props.link.Description}</div>
          
        </div>
      </Link>
    </div>
  )


}

export default OttbWebPart;