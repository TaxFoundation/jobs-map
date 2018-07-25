import React from 'react';
import JobsMapContext from '../Context';
import styled from 'styled-components';
import RangeInput from './RangeInput';

const SliderContainer = styled.div`
  align-content: center;
  align-items: center;
  display: grid;
  grid-gap: 10px;
  grid-template: auto / 1fr 6fr 1fr;
`;

const Label = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  text-align: center;
`;

const Slider = () => {
  return (
    <JobsMapContext.Consumer>
      {context => (
        <SliderContainer>
          <Label>{Math.min(...context.years)}</Label>
          <div>
            <RangeInput
              type="range"
              list="years"
              min={Math.min(...context.years)}
              max={Math.max(...context.years)}
              step="1"
              value={context.state.currentYear}
              onChange={e =>
                context.updateState('currentYear', +e.target.value)
              }
            />
            <datalist id="years">
              {context.years.map((y, i) => (
                <option value={y} key={`range-${y}`} />
              ))}
            </datalist>
          </div>
          <Label>{Math.max(...context.years)}</Label>
        </SliderContainer>
      )}
    </JobsMapContext.Consumer>
  );
};

export default Slider;
