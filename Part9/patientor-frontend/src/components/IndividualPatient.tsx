import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {
    useParams
  } from "react-router-dom";
import {apiBaseUrl} from '../constants';


const IndividualPatient = () =>{
    const [data,changeData] = useState({loading:true, id: null,
        name: null,
        occupation: null,
        gender: null,
        ssn: null,
        dateOfBirth: null});

    const { id } = useParams<{ id: string }>();
    useEffect(()=>{
        axios.get(`${apiBaseUrl}/patients/${id}`).then(
            response => changeData(response.data)
        );  
        //pulls data from api every time, doesn't save data in state
    },[id]);


    if(data.loading){
    return(<div>
       loading...
        </div>);
    }
    else{
        return(<div>
            {data.name} <br/>
            BOB: {data.dateOfBirth} <br/>
            occupation: {data.occupation}
            
        </div>);
    }

};

export default IndividualPatient;