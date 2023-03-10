import { Schema, model, Types, Document, Model } from 'mongoose';

// export interface ITour extends Document {
//   name: string;
//   duration: number;
//   maxGroupSize: number;
//   difficulty: string;
//   ratingsAverage?: number;
//   ratingsQuantity?: number;
//   price: number;
//   priceDiscount?: number;
//   summary: string;
//   description?: string;
//   imageCover: string;
//   images: string[];
//   startDates: Date[];
//   startLocation: {
//     type: string;
//     coordinates: number[];
//     address: string;
//     description: string;
//   };
//   locations: {
//     type: string;
//     coordinates: number[];
//     address: string;
//     description: string;
//     day: number;
//   }[];
// }

export interface ITour extends Document {
  name: string;
  price: number;
  rating?: number;
}

const tourSchema = new Schema<ITour>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

const TourModel: Model<ITour> = model<ITour>('Tour', tourSchema);

export default TourModel;
