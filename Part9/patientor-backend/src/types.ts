export interface Diagnoses {
    code: string,
    name: string,
    latin?: string
} 

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
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

export type safePatient = Omit<Patient,'ssn' |"entires">;

export enum Gender{
Male = "male",
Female = "female",
Other = "other"
}
 