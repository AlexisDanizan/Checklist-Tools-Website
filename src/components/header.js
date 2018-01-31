"use strict";
import { h } from "preact-cycle";
import Toolbar from "./toolbar";
import Status from "./status";
import Details from "./details";

const Header = ({ checklists, selected, done, team, project_name }) => {
  return (
    <header>
      <div className="container">
        <h3 className="checklist-name">
          Checklist: <strong>{checklists[selected].name}</strong>
        </h3>
        <Details team={team} project_name={project_name} />
        <Toolbar checklists={checklists} selected={selected} />
        <Status done={done} />
      </div>
    </header>
  );
};

export default Header;
