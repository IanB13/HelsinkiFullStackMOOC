import express from 'express';
import diagnosesServices from '../services/diagnosesService';

const diagnosesRouter = express.Router();

diagnosesRouter.get('', (_req, res) => {
  res.send(diagnosesServices.getEntries());
});


export default diagnosesRouter;