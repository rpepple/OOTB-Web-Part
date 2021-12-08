import { PrimaryButton } from '@microsoft/office-ui-fabric-react-bundle';
import { mergeStyles } from '@uifabric/merge-styles'
import { Panel } from 'office-ui-fabric-react';
import * as React from 'react'
import { IAddLinks } from './IAddLink';


function AddLink(props: IAddLinks) {

    let _container =mergeStyles({


    });


    return (
        <div className={_container}>
            <PrimaryButton text={props.buttonTitle} />
            <Panel >

                
            </Panel>
        </div>
    )
}

export default AddLink
