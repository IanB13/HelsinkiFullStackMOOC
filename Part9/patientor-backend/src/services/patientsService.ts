import patientData from '../data/patients';
import { Patient , safePatient } from '../types';
import {toNewPatientEntry} from '../utils';

const patients:Array<Patient> = patientData;

const getEntries = ():Array<Patient> => {
    return patients;
  };

const getSafeEntries = ():safePatient[]=>{
  const noSSN = patients.map(({id ,name ,dateOfBirth ,gender ,occupation,entries})=>{ return(
    {id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
    }
  );
});
  return noSSN;
};

  //this currently does nothing
  const addEntry = (newpatient: Patient):unknown => {
    console.log(newpatient);
    const entry = toNewPatientEntry(newpatient);
    patients.push(entry);
    return null;
  };
  
  const getPatient = (id:string):Patient =>{
    console.log(id);
    const patient = patients.filter(patient => patient.id === id)[0];

    return({
      ...patient
    });
  };


  export default {
    getEntries,
    addEntry,
    getSafeEntries,
    getPatient
  };
