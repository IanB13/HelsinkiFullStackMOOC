import React, {FC, useEffect,useState} from 'react';
import Axios from 'axios'; //should put this as a state and attach it to the Redux Store
import {Diagnoses as DiagnosesType} from '../../types';

const Diagnoses: FC<{diagnoses: string[]|undefined }> = ({diagnoses}) =>{
const [diagnosesList, setDiagnosesList] = useState< null | DiagnosesType[] >(null);
    //ineffective use, will re-render everytime
    //Should make Redux action
    useEffect( ()=>{
        Axios.get("http://localhost:3001/api/diagnoses").then(
        (Response) =>{
            console.log(Response.data);
             setDiagnosesList(Response.data);

        }
        );
    },[]);

if(diagnoses && diagnosesList){
return(
    <>
    {diagnoses.map(diagnose => <div key ={diagnose}>
         {diagnose}:
         {diagnosesList.find((list)=>list.code === diagnose)?.name}
         </div>)}
    </>
);
}
else{
    return null;
}
};

export default Diagnoses;