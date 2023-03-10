import { createTourInput } from './../schema/tour.schema';
import { Request, Response } from 'express';
import TourModel from '../models/tour.model';

export const createTourHandler = async (
  req: Request<{}, {}, createTourInput['body']>,
  res: Response
) => {
  try {
    const tour = await TourModel.create(req.body);
    res.status(200).json(tour);
  } catch (error) {
    console.log(error);
  }
};
