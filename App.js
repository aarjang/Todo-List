import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  addItem = () => {
    if (this.state.text !== '') {
      const newItem = {
        text: this.state.text,
        id: Date.now(),
      };
      const items = [...this.state.items, newItem];
      this.setState({ items, text: '' });
    }
  }

  deleteItem = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updatedItems });
  }

  render() {
    return (
      <div className="App">
        <h1>لیست موارد (Todo List)</h1>
        <div>
          <input
            type="text"
            placeholder="افزودن مورد جدید"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button onClick={this.addItem}>افزودن</button>
        </div>
        <TodoList items={this.state.items} onDelete={this.deleteItem} />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      text: '',
    };
  }

  componentDidMount() {
    const storedItems = localStorage.getItem('todo-items');
    if (storedItems) {
      this.setState({ items: JSON.parse(storedItems) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todo-items', JSON.stringify(this.state.items));
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  addItem = () => {
    if (this.state.text !== '') {
      const newItem = {
        text: this.state.text,
        id: Date.now(),
      };
      const items = [...this.state.items, newItem];
      this.setState({ items, text: '' });
    }
  }

  deleteItem = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updatedItems });
  }

  render() {
    return (
      <div className="App">
        <h1>لیست موارد (Todo List)</h1>
        <div>
          <input
            type="text"
            placeholder="افزودن مورد جدید"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button onClick={this.addItem}>افزودن</button>
        </div>
        <TodoList items={this.state.items} onDelete={this.deleteItem} />
      </div>
    );
  }
}

export default App;

