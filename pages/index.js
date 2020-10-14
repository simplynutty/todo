import React from 'react';
import fetch from 'isomorphic-fetch';

import {
  API_BASE_URL,
  API_KEY,
  APP_NAME,
} from '../config.js';

import { Header, Title } from '../components/Header/style.js';
import { Bar, Loader } from '../components/Loader/style';
import TodoList from '../components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };

    this.onToggleLoading = this.onToggleLoading.bind(this);
  }

  static async getInitialProps() {
    const response = await fetch(`${API_BASE_URL}/get`, {
      headers: {
        'X-Api-Key': API_KEY,
      },
      method: 'GET',
    });
    const json = await response.json();

    let todos = [];

    if (json && json.length) todos = json;

    return {
      todos,
    };
  }

  onToggleLoading(isLoading) {
    this.setState({ isLoading });
  }

  render() {
    const { todos = [] } = this.props;
    const { isLoading } = this.state;

    return (
      <>
        <Header>
          <Title>{APP_NAME}</Title>
          <Loader isLoading={isLoading}>
            &nbsp;
            <Bar className="bar-1" />
            <Bar className="bar-2" />
            <Bar className="bar-3" />
            <Bar className="bar-4" />
            <Bar className="bar-5" />
            <Bar className="bar-6" />
            <Bar className="bar-7" />
            <Bar className="bar-8" />
          </Loader>
        </Header>
        <TodoList isLoading={isLoading} todos={todos} toggleLoading={this.onToggleLoading} />
      </>
    );
  }
}

export default App;
