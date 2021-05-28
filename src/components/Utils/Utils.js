import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Utils.css';

export const AppLogo = () => {
  return <div className="logo">My Portfolio</div>;
};

export const TodosCount=(list)=>{
    return <span>Total: {list.length}</span>;
}

export function Item(item,handleDelete){
  const {title,id}= item
  return (
    <li className="item" key={item.id}>
      <span>{title}</span>
      <button 
        id={id}
        className="btn-remove"
        onClick={()=>handleDelete(id)}
      >
        <FontAwesomeIcon className="control-icon" icon="trash"/>
      </button>
    </li>
    
  )
}