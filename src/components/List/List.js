import React from 'react';
import './List.css';
import {Item} from '../Utils/Utils'
import { Todo } from '../../model/Todo';


//import { withTodos } from '../../hoc/withTodos';
//import { getAllTodos, deleteTodo, addTodo } from '../../apis/TodoAPI';
export default class List extends React.Component {
  static defaultProps = {
    list:[]
  }
  state = {
    inputText: '',
  };

  
  handleInputOnChange = (event) => {
    this.setState({ inputText: event.target.value });
  };
  handleInputKeyUp = (event) => {
    if (event.key === 'Enter') {
      const { handleAdd, counter } = this.props;
      const useId =counter+1;
      console.log(useId);
      const title = this.state.inputText;
      const completed = false;
      const newItem = new Todo(useId, title, completed);
      
      handleAdd(newItem);
      this.setState({
        inputText: '',
      });
    }
  };

  renderItemList=()=>{
    const { list,handleDelete}= this.props
    return (
      <ul className="todolist__content">
        {list.map(item=>Item(item,handleDelete))}
      </ul>  
    )
  }
 
  render() {
    const list= this.renderItemList()
    return (
      <section className="todolist">
        <header className="todolist__header">
          <h4 className="heading">Item List</h4>
        </header>
        <input
          type="text"
          className="todolist__input"
          placeholder="What are you going to do?"
          onChange={this.handleInputOnChange}
          onKeyUp={this.handleInputKeyUp}
          value={this.state.inputText}
        />
        {list}
      </section>
    );
  }
}

// export default conncent(withTodos(withAuth(withUser(TodoList))));



