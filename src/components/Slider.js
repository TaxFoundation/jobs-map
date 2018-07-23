import React, { Compinent } from 'react';
import JobsMapContext from '../Context';
import styled from 'styled-components';

const Range = styled.input``;

const Slider = () => {
  return (
    <JobsMapContext.Consumer>
      {context => (
        <div>
          <Range
            type="range"
            list="years"
            min={Math.min(...context.years)}
            max={Math.max(...context.years)}
            step="1"
            value={context.state.currentYear}
            onChange={e => context.updateState('currentYear', +e.target.value)}
          />
          <datalist id="years">
            {context.years.map((y, i) => (
              <option
                value={y}
                key={`range-${y}`}
                label={i === 0 || i === context.years.length - 1 ? y : ''}
              />
            ))}
          </datalist>
        </div>
      )}
    </JobsMapContext.Consumer>
  );
};

export default Slider;
