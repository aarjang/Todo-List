import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { item, onDelete } = this.props;

    return (
      <div>
        {item.text}
        <button onClick={() => onDelete(item.id)}>حذف</button>
      </div>
    );
  }
}

export default Todo;

