export interface Diagnoses {
    code: string,
    name: string,
    latin?: string
} 


export interface Patient {
    id: string;
    name: string;
    ssn: string;
    occupation: string;
    gender: Gender;
    dateOfBirth: string;
    entries: Entry[]
  }
  
export type PublicPatient = Omit<Patient, 'ssn' | 'entries' >;

export type newPatient = Omit<Patient,'id'>;

export type safePatient = Omit<Patient,'ssn'>;

export enum Gender{
Male = "male",
Female = "female",
Other = "other"
}
 
export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;


interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<Diagnoses['code']>;
  }

  export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
  }
  
  interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
  }

  interface HospitalEntry extends BaseEntry {
    type: "Hospital";

  }
  interface OccupationalHealthcareEntry extends BaseEntry {
    type: "OccupationalHealthcare"
  }