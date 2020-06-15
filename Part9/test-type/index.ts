import express from 'express';
import bmiCalc from'./bmiCalculator';

const app = express();

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello',(_req,res)=>{
  res.send('Hello Full Stack!');
});
//bmi?height=[height]&weight=[weight]
app.get('/bmi', (req,res)=>{
  if(req.query.height && req.query.weight){
    const BMIString = bmiCalc(+req.query.height,+req.query.weight);
    res.send( { "height": +req.query.height  , "weight": +req.query.weight, "bmi": BMIString });
  }
   else res.send({"error": "malformatted parameters"});
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});