import express from 'express';
import bmiCalc from'./bmiCalculator';
import exerciseCalc from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello',(_req,res)=>{
  res.send('Hello Full Stack!');
});
//bmi?height=[height]&weight=[weight]
app.get('/bmi', (req,res)=>{
  console.log("In bmi");
  if(req.query.height && req.query.weight){
    const BMIString = bmiCalc(+req.query.height,+req.query.weight);
    res.send( { "height": +req.query.height  , "weight": +req.query.weight, "bmi": BMIString });
  }
   else res.send({"error": "malformatted parameters"});
});

app.post('/exercises',(req,res)=>{


 // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if(!(req.body.daily_exercises && (req.body.target|| +req.body.target === 0)) ){
    res.send({error: "parameters missing"});
  }
 // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
 else if(isNaN(+req.body.target) || isNaN(req.body.daily_exercises[0])){
  res.send({error: "malformatted parameters" });
 }
 else{
     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
   for(const nums of req.body.daily_exercises){
      if(isNaN(nums)){
        res.send({error: "malformatted parameters" });
      }
   }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const exInterface = exerciseCalc(req.body.daily_exercises, +req.body.target);
  res.send(exInterface);
  }

});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});