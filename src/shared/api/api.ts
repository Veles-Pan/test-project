import axios from 'axios';
import { LOCAL_STORAGE_AUTH } from 'shared/constants/localStorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_AUTH) || ''}`,
  },
});
