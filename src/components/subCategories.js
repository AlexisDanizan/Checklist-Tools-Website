"use strict";
import { h } from "preact-cycle";
import { Component } from "preact";
import Category from "./category";

class SubCategories extends Component {
  sliceCategories(categories, chunk) {
    let categoriesObj = [];
    let i,
      j,
      k = 0,
      temparray;
    for (i = 0, j = categories.length; i < j; i += chunk) {
      if (i + chunk > j) temparray = categories.slice(i, categories.length);
      else temparray = categories.slice(i, i + chunk);
      categoriesObj[k] = [];
      temparray.map(category => {
        categoriesObj[k].push(
          <Category key={category.id} category={category} />
        );
      });
      k++;
    }
    return categoriesObj;
  }
  render({ categories }, state, ctx) {
    let categoriesObj = this.sliceCategories(categories, 3);
    return (
      <div>
        {categoriesObj.map((chunk, i) => {
          return <div className="row">{chunk}</div>;
        })}
      </div>
    );
  }
}
export default SubCategories;
