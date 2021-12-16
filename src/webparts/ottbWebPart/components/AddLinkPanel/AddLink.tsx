import { ActionButton, PrimaryButton, Stack, TextField } from '@microsoft/office-ui-fabric-react-bundle';
import { mergeStyles } from '@uifabric/merge-styles'
import { Panel } from 'office-ui-fabric-react';
import * as React from 'react'
import { IAddLinks } from './IAddLink';
import { useState } from 'react'
import { IAddLinkProps } from './IAddLinkProps';


function AddLink(props: IAddLinks) {

    let [isOpen, setIsOpen] = useState(false);
    let _from: IAddLinkProps ={title:"", url:"", description:""}
    let [form, setForm] = useState({

        title:"",
        url:"",
        description:""
    });

    let _container = mergeStyles({


    });

    let _btnCont = mergeStyles({

        paddingTop:20

    });

function _onSubmit(){
    setIsOpen(false);
    props.HandleAddLink(form)
    console.log("Fields Capture", JSON.stringify(form))
}

    return (
        <div className={_container}>
            <ActionButton iconProps={{iconName:"Add"}} text={props.buttonTitle} onClick={()=> setIsOpen(true)}/>
            <Panel isOpen={isOpen} headerText="Add links" onDismiss={()=>{setIsOpen(false)}}>
                <Stack tokens={{childrenGap:30}}>
                    <TextField onChange={(e)=>{ setForm({...form, title: (e.target as HTMLInputElement).value}) }} label="Title" />
                    <TextField onChange={(e)=>{ setForm({...form, url: (e.target as HTMLTextAreaElement).value}) }} multiline rows={2} label="Url" />
                    <TextField onChange={(e)=>{ setForm({...form, description: (e.target as HTMLTextAreaElement).value}) }} multiline rows={3} label="Description"/>
                    <Stack className={_btnCont} horizontal horizontalAlign={'end'}tokens={{childrenGap:10}}>
                        <PrimaryButton text="Add Link" onClick = {()=>_onSubmit()}/>
                        <PrimaryButton text ="Cancel" onClick={()=> setIsOpen(false)}/>
                    </Stack>
                </Stack>
            </Panel>
        </div>
    )
}

export default AddLink
