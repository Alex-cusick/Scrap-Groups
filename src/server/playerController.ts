import { Request, Response, NextFunction, RequestHandler } from 'express';
import fs from 'fs';
import path from 'path';
import { PlayerControllerType, ServerError } from '../types';


export const playerController = {

  // getScores: (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     res.locals.scores = JSON.parse(fs.readFileSync(path.resolve(__dirname, './db.json'), "utf-8"));
  //     return next(); 
  //   }
  //   catch (err) {
  //     return next({
  //       log: 'Express error handler caught getScores error',
  //       status: 400,
  //       message: { err: 'An error occurred in getScores' },
  //     });
  //   }
  // },
  
  // updateScores: (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const newScore = JSON.parse(fs.readFileSync(path.resolve(__dirname, './db.json'), "utf-8"));
  //     newScore[req.body.winner]++;
  //     res.locals.scores = newScore; 
  //     fs.writeFileSync(path.resolve(__dirname, './db.json'), JSON.stringify(newScore)); 
  //     return next(); 
  //   }
  //   catch (err) {
  //     return next({
  //       log: 'Express error handler caught updateScores error',
  //       status: 400,
  //       message: { err: 'An error occurred in updateScores' },
  //     });
  //   }
  // },
}