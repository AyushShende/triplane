import { api } from './axios';

export const getTours = async () => {
  const response = await api.get('/tours');
  return response.data.data.tours;
};
export const getTour = async (id) => {
  const response = await api.get(`/tours/${id}`);
  return response.data.data;
};
