import React from 'react';
import './HomePage.css';

const HomePage = () => {
return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <div className="todo-form">
        <input type="text"  placeholder="Enter a task"/>
        <button type="submit">aaaaajouti asba</button>
      </div>
      <ul className="todo-list">
       
          <li className="todo-item" >
            <div className='aaa'>test</div>
            <div className="todo-item-actions">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </li>
        
      </ul>
    </div>
  );
};
export default HomePage;
