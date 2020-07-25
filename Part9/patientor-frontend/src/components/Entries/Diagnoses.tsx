import React, {FC} from 'react';

const Diagnoses: FC<{diagnoses: string[]|undefined }> = ({diagnoses}) =>{
console.log(diagnoses);

if(diagnoses){
return(
    <>
    {diagnoses.map(die => <div key ={die}> {die} </div>)}
    </>
);
}
else{
    return null;
}
};

export default Diagnoses;