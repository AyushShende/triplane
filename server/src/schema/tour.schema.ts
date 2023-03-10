import { number, object, string, TypeOf } from 'zod';

export const createTourSchema = object({
  body: object({
    name: string({ required_error: 'Name is required' }),
    price: number({ required_error: 'price is required' }),
    rating: number({ required_error: 'rating is required' }),
  }),
});

export type createTourInput = TypeOf<typeof createTourSchema>;
