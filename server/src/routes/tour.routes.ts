import { createTourHandler } from './../controllers/tour.controller';
import { createTourSchema } from './../schema/tour.schema';
import { Router, Request, Response } from 'express';
import validate from '../middlewares/validateResource';
const router = Router();

router.get('/', (req: Request, res: Response) => res.sendStatus(200));

router.post('/', validate(createTourSchema), createTourHandler);
export default router;
