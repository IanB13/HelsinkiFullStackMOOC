interface exerciseInterface {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const exerciseCalc = (dailyHours:number[],target:number):exerciseInterface =>{
    const periodLength = dailyHours.length;
    
    const  trainingDays = dailyHours.reduce( (acc,cur) =>{
        if(cur){
            return ++acc;
        }
        return acc;
    },0);

    const totalHours = dailyHours.reduce( (acc,cur) =>{
        if(cur){
            return acc+cur;
        }
        return acc;
    },0);

    const average = totalHours/periodLength;

    const success = (average >= target) ? true :false;
    const rating = Math.floor(Math.random()*5);
    const ratingDescription = success? "good work!": "fAiLuRe";

    return(
        {periodLength,trainingDays,success,rating,
        ratingDescription,target,average
        }
    );
};

export default exerciseCalc;