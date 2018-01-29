import storage from './storage';
import {STORE_KEY} from './type';

export const load = (default_data) => {
  return storage.get(STORE_KEY,default_data);
};

export const save = (state) => {
  storage.set(STORE_KEY,state);
};
