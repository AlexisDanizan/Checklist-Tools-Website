import {PRIORITY_HIGH,PRIORITY_LOW,PRIORITY_MEDIUM} from "./stores/type";

let idCounter = 0;

const uniqueId = (prefix) => {
  let id = ++idCounter;
  return prefix + id;
};

export const AddGenerateId = (data) => {
  data.checklists = data.checklists.map((checklist) => {
    checklist.group_categories = checklist.group_categories.map((group) =>{
      group.categories = group.categories.map((category) => {
        category.id = uniqueId('category-');
        category.tasks = category.tasks.map((task) => {
          task.id = uniqueId('task-');
          return task;
        });
        return category;
      });
        group.id=uniqueId('group-');
        return group;
    });
    return checklist;
  });

  return data;
};

export const countStatus = (checklist) => {
  let doneTotal = {
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
  };
  checklist.group_categories.map((group) =>{
    group.categories.map((category) => {
      category.tasks.map((task) => {
        if(task.priority === PRIORITY_HIGH){
          doneTotal.high.total++;
          if(task.done) doneTotal.high.count++;
        }else if(task.priority === PRIORITY_MEDIUM){
          doneTotal.medium.total++;
          if(task.done) doneTotal.medium.count++;
        }else if(task.priority === PRIORITY_LOW){
          doneTotal.low.total++;
          if(task.done) doneTotal.low.count++;
        }
      });
    });
  });
  return doneTotal;
};
