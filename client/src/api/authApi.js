// import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from './axios';

export const registerUser = async (body) => {
  const response = await api.post('/users/signup', body);
  return response.data.data;
};
export const loginUser = async (body) => {
  const response = await api.post('/users/login', body);
  return response.data.data;
};

export const logoutUser = async () => {
  const response = await api.get('/users/logout');
  return response.data;
};

export const getCurrentuser = async () => {
  const response = await api.get('users/me');
  return response.data.data;
};
