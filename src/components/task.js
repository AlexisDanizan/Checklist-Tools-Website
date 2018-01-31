"use strict";
import { render, h } from "preact-cycle";
import { Component } from "preact";

import { PRIORITY_HIGH, PRIORITY_LOW, PRIORITY_MEDIUM } from "../stores/type";

const CHECKED = (state, task) => {
  task.checked = !task.checked;
  if (task.priority === PRIORITY_HIGH) {
    state.done.high.count = task.checked
      ? state.done.high.count + 1
      : state.done.high.count - 1;
  } else if (task.priority === PRIORITY_MEDIUM) {
    state.done.medium.count = task.checked
      ? state.done.medium.count + 1
      : state.done.medium.count - 1;
  } else if (task.priority === PRIORITY_LOW) {
    state.done.low.count = task.checked
      ? state.done.low.count + 1
      : state.done.low.count - 1;
  }
};
const DEVELOP = (state, task) => {
  task.developped = !task.developped;
};

const isChecked = task => {
  return task.checked ? "checked" : "";
};

const isCheckedIcon = task => {
  return (
    task.priority +
    " fa " +
    (task.checked ? "fa-check checked " : "fa-square not-checked")
  );
};

const isDevelopped = task => {
  return (
    "fa fa-lg fa-2x " + (task.developped ? "fa-angle-down" : "fa-angle-left")
  );
};

const TypeIcon = type => {
  let icon = "fa-li fa ";
  if (type === "link") {
    return icon + "fa-book";
  } else if (type === "tools") {
    return icon + "fa-wrench";
  }
};

class Task extends Component {
  render({ task }, state, { mutate, mutation }) {
    return (
      <div className="task show-on-mobile">
        <p>
          <span onClick={mutation(CHECKED, task)} className={isChecked(task)}>
            <i className={isCheckedIcon(task)} />
            {task.title}&nbsp;
          </span>
          {(task.explications || task.links) && (
            <span onClick={mutation(DEVELOP, task)}>
              <i className={isDevelopped(task)} aria-hidden="true" />
            </span>
          )}
        </p>
        {task.developped && (
          <div className="task-details">
            {(task.explications || task.code) && (
              <blockquote>
                {task.explications && (
                  <p>
                    <em>{task.explications}</em>
                  </p>
                )}
                {task.code && (
                  <pre>
                    <code>{task.code}</code>
                  </pre>
                )}
              </blockquote>
            )}
            {task.links && (
              <ul className="fa-ul">
                {task.links.map((link, i) => {
                  return (
                    <li key={link}>
                      <a href={link.path} target="_blank">
                        <i className={TypeIcon(link.type)} aria-hidden="true" />
                        {link.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Task;
