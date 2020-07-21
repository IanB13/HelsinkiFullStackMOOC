import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {
    useParams
  } from "react-router-dom";
import {apiBaseUrl} from '../constants';
import {Patient} from '../types';
import Entries from './Entries/Entries';


const IndividualPatient = () =>{
    const [data , changeData] = useState<Patient | undefined >();

    const { id } = useParams<{ id: string }>();
    useEffect(()=>{
        axios.get(`${apiBaseUrl}/patients/${id}`).then(
            response => changeData(response.data)
        );  
        //pulls data from api every time, doesn't save data in state
    },[id]);
    console.log("patient data is:");
    console.log(data);


    if(!data){
    return(<div>
       loading...
        </div>);
    }
    else{
        return(
        <div>
            {data.name} <br/>
            BOB: {data.dateOfBirth} <br/>
            occupation: {data.occupation} <br />
            entry date: {data.entries[0]?.date}
            <Entries  entries =  {data.entries}/>
            <br/>
        </div>);
    }

};


export default IndividualPatient;