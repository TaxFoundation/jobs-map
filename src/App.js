import React, { Component } from 'react';
import JobsMapContext from './Context';
import JOBS from './data/jobs.json';
import Slider from './components/Slider';
import USMap from './components/USMap';

class Provider extends Component {
  constructor() {
    super();

    this.state = {
      currentYear: 2018,
    };

    this.years = JOBS.map(y => y.year).sort((a, b) => a - b);
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
          years: this.years,
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
        <div>
          <Slider />
          <USMap />
        </div>
      </Provider>
    );
  }
}

export default App;
