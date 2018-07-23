import React, { Component } from 'react';
import JobsMapContext from './Context';

class Provider extends Component {
  constructor() {
    super();

    this.state = {
      year: 2018,
    };
  }

  render() {
    return (
      <JobsMapContext.Provider
        value={{
          state: this.state,
          updateState: (pieceOfState, data) => {
            this.setState({
              [pieceOfState]: data,
            });
          },
        }}
      >
        {this.props.children}
      </JobsMapContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider>
        <div />
      </Provider>
    );
  }
}

export default App;
