"use strict";
import { h } from "preact-cycle";
import { TEAM_CHANGE, PROJECT_CHANGE } from "../reducers/checklist";

const Details = ({ project_name, team }, { mutate }) => {
  return (
    <div>
      <div className="for-print">
        <h4>
          <strong>Project:</strong> {project_name}
        </h4>
        <h4>
          <strong>Team:</strong> {team}
        </h4>
      </div>
      <div className="row details">
        <div className="column">
          <label htmlFor="projectField">Project name</label>
          <input
            placeholder="Project name..."
            id="projectField"
            type="text"
            value={project_name}
            onChange={e => mutate(PROJECT_CHANGE, e.target.value)}
          />
        </div>
        <div className="column">
          <label htmlFor="teamField">Team name</label>
          <input
            placeholder="Team..."
            id="teamField"
            type="text"
            value={team}
            onChange={e => mutate(TEAM_CHANGE, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
