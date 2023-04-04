import { RequestHandler } from 'express';

type handleBoxClick = (row: number, column: number) => void

export type ServerError = {
  log: string,
  status: number,
  message: object
}

export type PlayerControllerType = {
  getScores: RequestHandler,
  updateScores: RequestHandler,
}