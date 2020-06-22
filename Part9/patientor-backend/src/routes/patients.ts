import express from 'express';
import patientsService from '../services/patientsService';

const patientsRouter = express.Router();

patientsRouter.get('', (_req, res) => {
  res.send(patientsService.getSafeEntries());
});

patientsRouter.post('', (req,res) =>  {
   patientsService.addEntry(req.body);
  res.json(req.body);
});

export default patientsRouter;