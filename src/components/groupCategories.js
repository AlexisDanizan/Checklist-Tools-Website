"use strict";
import { h } from "preact-cycle";
import { Component } from "preact";
import SubCategories from "./subCategories";

class GroupCategories extends Component {
  render({ group_categories }, state, ctx) {
    return (
      <div className="categories">
        {group_categories.map(group => {
          return (
            <div>
              <h1 className="group-title">
                {group.title_group}{" "}
                <a className="go-top" href="#app">
                  <i className="fa fa-arrow-up" aria-hidden="true" />
                  &nbsp;Back to top
                </a>
              </h1>
              <SubCategories key={group.id} categories={group.categories} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default GroupCategories;
