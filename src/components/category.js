"use strict";
import { Component } from "preact";
import { h } from "preact-cycle";
import Task from "./task";

class Category extends Component {
  render({ category }) {
    return (
      <div className="column column-33 show-on-mobile-">
        <h1>{category.title}</h1>
        {category.tasks.map(task => <Task key={task.id} task={task} />)}
      </div>
    );
  }
}
export default Category;
