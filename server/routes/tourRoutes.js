import express from 'express';
const router = express.Router();
import {
  getAlltours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
} from '../controllers/tourController.js';
import { protect } from '../middlewares/protect.js';
import { restrictTo } from '../middlewares/restrict.js';
import reviewRoutes from '../routes/reviewRoutes.js';

router.use('/:tourId/reviews', reviewRoutes);

router
  .route('/')
  .get(getAlltours)
  .post(protect, restrictTo('admin', 'lead-guide'), createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(protect, restrictTo('admin', 'lead-guide'), updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

export default router;
