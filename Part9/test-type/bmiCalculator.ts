const calcBMI = (height:number, weight:number):string =>{
const BMI = weight / (height/100)**2
let  BMIdesc:string = ""
if(BMI <= 18.5){
   BMIdesc = 'underweight'
}
else if(BMI <= 25){
    BMIdesc = 'healthy weight'    
}
else if(BMI <= 30){
    BMIdesc = 'overweight' 
}
else{
    BMIdesc = 'obese'

}
    
return ` BMI is ${BMI}, which is ${BMIdesc}`

}
const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])
console.log(calcBMI(height,weight))