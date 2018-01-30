import front_end from '../checklist/front-end.json';
import api_security from '../checklist/api-security.json';
import seo from '../checklist/seo.json';
import side_project_marketing from '../checklist/side-project-marketing';

import {load} from "./manage";
import {countStatus,AddGenerateId} from "../utils";

const INITIAL_DATA = {
  checklists: [
    front_end,
    api_security,
    seo,
    side_project_marketing,
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



