import React, { Compinent } from 'react';
import JobsMapContext from '../Context';
import styled from 'styled-components';

const Range = styled.input``;

const Slider = props => {
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
          />
          <datalist id="years">
            {context.years.map((y, i) => (
              <option
                value={y}
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
