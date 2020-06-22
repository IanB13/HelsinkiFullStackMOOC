export type Code = string;



export interface Diagnoses {
    code: Code,
    name: string,
    latin?: string
} 

export interface Patient {
    id: string,
}