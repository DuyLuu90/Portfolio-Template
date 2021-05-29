import React from 'react';
//import { getAllTodos, deleteTodo, addTodo } from '../../apis/TodoAPI';
import {GeneralApiServices} from '../../services/api-service'

export default class BusinessLogic extends React.Component {
  state = {
    title:'List',
    list: [],
    counter:0,
  };

  componentDidMount() {
    GeneralApiServices.getAllItems().then((data) => {
      this.setState({
        list: data,
        counter:data.length,
      });
    });
  }

  handleAdd=(item)=>{
    this.setState({
      counter: this.counter+1
    })
    GeneralApiServices.postItem(item).then(data=>{
      this.setState({
        list:[data, ...this.state.list],
        
      })
    })
  }

  handleDelete=(id)=>{
    GeneralApiServices.deleteItemById(id).then(data=>{
      this.setState({
        list: this.state.list.filter(item=> item.id !==id)
      })
    }).catch(err=>console.warn(err))
  }
  
  render() {
    let header = null;
    let content = null;
    const { render, children, renderHeader } = this.props;
    if (renderHeader) {
      header = renderHeader(this.state.title);
    }

    if (render) {
      content = render(
        this.state.list,
        this.handleDelete,
        this.handleAdd,
        this.state.counter,
       
      );
    } else if (children) {
      content = children(
        this.state.list,
        this.handleDelete,
        this.handleAdd,
        this.state.counter,
      );
    }

    return (
      <>
        {header}
        {content}
      </>
    );
  }
}

