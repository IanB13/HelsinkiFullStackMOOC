import patientData from '../data/patients';
import { Patient , safePatient } from '../types';

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
  const addEntry = (newpatient: unknown):unknown => {
    console.log(newpatient);
    
    return null;
  };
  
  export default {
    getEntries,
    addEntry,
    getSafeEntries
  };