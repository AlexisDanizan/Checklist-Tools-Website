import {save} from "../stores/manage";
import {countStatus} from '../utils';

export const TOGGLE = ({ selected, checklists, done, ...state }, selectedValue) => {
    let doneCount = countStatus(checklists[selectedValue]);
    return {
      selected: selectedValue,
      done: doneCount,
      checklists: checklists,
      ...state
    }
};

export const TEAM_CHANGE = ({ team, ...state }, teamValue) => {
  return {
    team: teamValue,
    ...state
  }
};

export const PROJECT_CHANGE = ({ project_name, ...state }, projectValue) => {
  return {
    project_name: projectValue,
    ...state
  }
};

export const SAVE =(state) => {
    save(state);
};

export const RESET = ({checklists,done,team,project_name, ...state},selected) => {

  checklists[selected].group_categories = checklists[selected].group_categories.map((group) =>{
    group.categories = group.categories.map((category) => {
      category.tasks = category.tasks.map((task) => {
        task.checked = false;
        task.developped = false;
        return task;
      });
      return category;
    });
    return group;
  });

  return {
    checklists: checklists,
    done: countStatus(checklists[selected]),
    team:"",
    project_name:"",
    ...state
  };
};