/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {Patient, Gender, Entry, HealthCheckRating,Discharge} from './types';


export const toNewPatientEntry= (obj:any):Patient =>{
    return {
        id :` ${Math.floor(Math.random()*10000)}`,
        name : parseName(obj.name),
        dateOfBirth : parseMiscStr(obj.dateOfBirth),
        ssn: parseMiscStr(obj.ssn),
        gender: parseGender(obj.gender),
        occupation: parseMiscStr(obj.occupation),
        entries: parseEntries(obj.entries)
    };
};

const parseEntries = (entriesArray: any): Entry[] =>{
  const entries = [];  
  if(entriesArray){
  for( const entry of entriesArray){
        const checkedEntry = toEntry(entry);
        entries.push(checkedEntry); // should use a map function here instead
    }
  }
return (entries);
};

const toEntry =(entryObj :any): Entry =>{
  switch (entryObj.type) {
    case "HealthCheck":
      return({
        type: "HealthCheck",
        id: parseMiscStr(entryObj.id),
        description: parseMiscStr(entryObj.description),
        date: parseMiscStr(entryObj.date),
        specialist: parseMiscStr(entryObj.specialist),
        healthCheckRating: parseHealthCheckRating(entryObj.healthCheckRating)
      });
      case "Hospital":
        return({
            type: "Hospital",
            id: parseMiscStr(entryObj.id),
            description: parseMiscStr(entryObj.description),
            date: parseMiscStr(entryObj.date),
            specialist: parseMiscStr(entryObj.specialist),
            discharge: parseDischarge(entryObj.discharge)
        });
      
      case "OccupationalHealthcare":
        return({
          type: "OccupationalHealthcare",
          id: parseMiscStr(entryObj.id),
          description: parseMiscStr(entryObj.description),
          date: parseMiscStr(entryObj.date),
          specialist: parseMiscStr(entryObj.specialist),
          employerName: parseMiscStr(entryObj.employerName)
          
        });
    default:
      console.log(entryObj.type);
      throw new Error('Incorrect entry type ');
  }
};

const isHealthCheckRating = (rating: any): rating is HealthCheckRating =>{
  return Object.values(HealthCheckRating).includes(rating);
};

const parseHealthCheckRating = (rating:any): HealthCheckRating =>{
  if(!isHealthCheckRating(rating)){
    throw new Error('Incorrect or missing srting');
  }
  return rating;
};


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

const parseDischarge = (obj:any):Discharge =>{
  return({
    criteria: parseMiscStr(obj.criteria),
    date: parseMiscStr(obj.date)
  });
};