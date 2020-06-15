interface exerciseInterface {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const exerciseCalc = (dailyHours:number[]):exerciseInterface =>{
    const periodLength = dailyHours.length
    
    const  trainingDays = dailyHours.reduce( (acc,cur) =>{
        if(cur){
            return ++acc
        }
        return acc
    },0)

    const totalHours = dailyHours.reduce( (acc,cur) =>{
        if(cur){
            return acc+cur
        }
        return acc
    },0)

    const target = 2
    const average = totalHours/periodLength

    const success = (average >= target) ? true :false
    const rating = Math.floor(Math.random()*5)
    const ratingDescription = 'not too bad but could be better'

    return(
        {periodLength,trainingDays,success,rating,
        ratingDescription,target,average
        }
    )
}

console.log(exerciseCalc([1,2,3,4,0,0,8,3,42,3]))