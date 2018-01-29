import { h } from 'preact-cycle';
import Task from './task';
import { Component } from 'preact';

class Category extends Component{
  render({category},state,ctx){
    return(
      <div className="column column-33">
        <h1>{category.title}</h1>
        {
          category.tasks.map((task) => {
            return (<Task key={task.id} task={task} />);
          })
        }
      </div>
    );
  }
}
export default Category;