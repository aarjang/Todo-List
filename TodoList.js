import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { items, onDelete } = this.props;

    return (
      <div>
        {items.map(item => (
          <Todo key={item.id} item={item} onDelete={onDelete} />
        ))}
      </div>
    );
  }
}

export default TodoList;

