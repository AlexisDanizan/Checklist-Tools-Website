"use strict";
import { render, h } from 'preact-cycle';
import { Component } from 'preact';

import {initialState} from './stores/checklistStore';
import Header from './components/header';
import GroupCategories from './components/groupCategories';
import {SAVE} from "./reducers/checklist";


class App extends Component{
  componentDidMount() {
    this.timer = setInterval(() => {
      this.context.mutate(SAVE);
    }, 15000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render({checklists,done,selected,team,project_name},state,ctx){
    return (
      <div>
        <Header checklists={checklists} selected={selected} done={done} team={team} project_name={project_name}/>
        <GroupCategories group_categories={checklists[selected].group_categories}/>
      </div>
    );
  }
}
render(App, initialState(), document.getElementById("app"));