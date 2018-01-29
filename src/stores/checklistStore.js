import front_end from '../checklist/front-end.json';
import {load} from "./manage";
import {countStatus,AddGenerateId} from "../utils";

const INITIAL_DATA = {
  checklists: [
    front_end
  ],
  done: {
    high:{
      count: 0,
      total: 0
    },
    medium:{
      count: 0,
      total: 0
    },
    low: {
      count: 0,
      total: 0
    }
  },
  selected: 0,
  projet_name: "",
  team:""
};


export const initialState = () => {
  INITIAL_DATA.done = countStatus(INITIAL_DATA.checklists[INITIAL_DATA.selected]);
  return load(AddGenerateId(INITIAL_DATA));
};



