import patientData from '../data/patients';
import { Patient , safePatient } from '../types';
import {toNewPatientEntry} from '../utils';

const patients:Array<Patient> = patientData;

const getEntries = ():Array<Patient> => {
    return patients;
  };

const getSafeEntries = ():safePatient[]=>{
  const noSSN = patients.map(({id ,name ,dateOfBirth ,gender ,occupation})=>{ return(
    {id,
    name,
    dateOfBirth,
    gender,
    occupation
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
  
  export default {
    getEntries,
    addEntry,
    getSafeEntries
  };