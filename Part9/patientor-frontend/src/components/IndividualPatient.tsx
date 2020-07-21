import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {
    useParams
  } from "react-router-dom";
import {apiBaseUrl} from '../constants';
import {Patient} from '../types';



const IndividualPatient = () =>{
    const [data , changeData] = useState<Patient | undefined >();

    const { id } = useParams<{ id: string }>();
    useEffect(()=>{
        axios.get(`${apiBaseUrl}/patients/${id}`).then(
            response => changeData(response.data)
        );  
        //pulls data from api every time, doesn't save data in state
    },[id]);
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
            occupation: {data.occupation}
            
            entry date: {data.entries[0]?.date}
            <br/>
        </div>);
    }

};


export default IndividualPatient;