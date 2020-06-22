import patientData from '../data/patients.json';
console.log(patientData);
import { Patient } from '../types';

const patients: Array<Patient> = patientData;

const getEntries = ():Array<Patient> => {
    return patients;
  };

  //this currently does nothin
  const addEntry = ():null => {
    return null;
  };
  
  export default {
    getEntries,
    addEntry
  };