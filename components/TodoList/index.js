import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

import {
  API_BASE_URL,
  API_KEY,
} from '../../config.js';

import { List, ListWrapper } from './style';
import TodoItem from '../TodoItem';


class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.onToggleComplete = this.onToggleComplete.bind(this);
  }

  componentDidMount() {
    const { todos = [] } = this.props;

    this.setState({
      todos: _.sortBy(todos, ['isComplete', 'dueDate']),
    });
  }

  async onToggleComplete(id) {
    const { todos = [] } = this.state;
    const { isLoading, toggleLoading } = this.props;

    if (isLoading) return;

    toggleLoading(true);

    const response = await fetch(`${API_BASE_URL}/patch/${id}`, {
      headers: {
        'X-Api-Key': API_KEY,
      },
      method: 'PATCH',
    });
    const json = await response.json();
                
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const isComplete = json && json.status === 'success' ? !todo.isComplete : todo.isComplete;
        return {
          ...todo,
          isComplete,
        };
      }

      return todo;
    });
    
    this.setState({
      todos: _.sortBy(updatedTodos, ['isComplete', 'dueDate']),
    });

    toggleLoading(false);
  }

  render() {
    const { todos = [] } = this.state;
    const { isLoading } = this.props;

    return (
      <ListWrapper isLoading={isLoading}>
        <List>
          {todos && todos.map(({ description, dueDate, id, isComplete }) => (
            <TodoItem
              dueDate={dueDate}
              description={description}
              id={id}
              isComplete={isComplete}
              key={id}
              toggleComplete={this.onToggleComplete} />
          ))}
        </List>
      </ListWrapper>
    );
  }
};

TodoList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleLoading: PropTypes.func.isRequired,
};

export default TodoList;
