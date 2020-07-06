import express from 'express';
import patientsService from '../services/patientsService';

const patientsRouter = express.Router();

patientsRouter.get('', (_req, res) => {
  res.send(patientsService.getSafeEntries());
});

patientsRouter.get('/:id',(req,res) => {
  const id = req.params.id;
  const patient = patientsService.getPatient(id);
  res.send(patient);
});

patientsRouter.post('', (req,res) =>  {
   patientsService.addEntry(req.body);
  res.json(req.body);
});

export default patientsRouter;