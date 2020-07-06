/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {Patient, Gender} from './types';


export const toNewPatientEntry= (obj:any):Patient =>{
    return {
        id :` ${Math.floor(Math.random()*10000)}`,
        name : parseName(obj.name),
        dateOfBirth : parseMiscStr(obj.dateOfBirth),
        ssn: parseMiscStr(obj.ssn),
        gender: parseGender(obj.gender),
        occupation: parseMiscStr(obj.occupation),
        entries:[]
    };
};

/* "id": "d2773336-f723-11e9-8f0b-362b9e155667",
"name": "John McClane",
"dateOfBirth": "1986-07-09",
"ssn": "090786-122X",
"gender": "male",
"occupation": "New york city cop" */

const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
  };


const parseMiscStr = (str: any): string => {
    if (!str || !isString(str)) {
      console.log(str);
      throw new Error('Incorrect or missing srting');
    } 
    return str;
  };

const parseName = (name: any): string => {
    if (!name || !isString(name)) {
      console.log(name);
      throw new Error('Incorrect or missing name');
    } 
    return name;
};

//checks whether or not type is gender
const isGender = (param: any): param is Gender =>{
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
      throw new Error('Incorrect or missing gender');
  } 
  return gender;
};