import React from 'react';
import styled from 'styled-components';
import { colorize } from '../helpers';

const LegendContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template: auto / 1fr 8fr 1fr;
  margin-top: 16px;
`;

const LegendText = styled.p`
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0 15px;
  text-align: ${props => props.textAlign};
`;

const LegendBar = styled.div`
  display: grid;
  grid-template: auto / repeat(${props => props.steps}, 1fr);
`;

const Legend = props => (
  <LegendContainer>
    <LegendText textAlign="right">0% More Jobs</LegendText>
    <LegendBar steps={props.steps}>
      {[...Array(props.steps).keys()].map(s => (
        <div style={{ backgroundColor: colorize(s, [0, props.steps]) }} />
      ))}
    </LegendBar>
    <LegendText textAlign="left">1% More Jobs</LegendText>
  </LegendContainer>
);

export default Legend;
