import diagnosesData from '../data/diagnoses.json';

import { Diagnoses } from '../types';

const diagnoses: Array<Diagnoses> = diagnosesData;

const getEntries = ():Array<Diagnoses> => {
    return diagnoses;
  };
  //this currently does nothin
  const addEntry = ():null => {
    return null;
  };
  
  export default {
    getEntries,
    addEntry
  };