import React from 'react';
import styled from 'styled-components';
import { formatter } from '../helpers';

const SummaryStatsContainer = styled.div`
  align-items: center;
  border: 1px solid #0094ff;
  border-radius: 4px;
  box-sizing: border-box;
  display: grid;
  font-family: 'Lato', sans-serif;
  max-width: 400px;
  margin: 10px auto;
  text-align: center;
`;

const SummaryHeader = styled.thead`
  background-color: #0094ff;
  border-radius: 4px 4px 0 0;
  color: #fff;
  padding: 12px;
`;

const SummaryBody = styled.div`
  display: grid;
  grid-gap: 18px;
  grid-template: repeat(2, auto) / repeat(2, auto);
  padding: 18px;
`;

const SummaryCell = styled.div``;

const SummaryStats = props => (
  <SummaryStatsContainer>
    <SummaryHeader>{props.year}</SummaryHeader>
    <SummaryBody>
      <SummaryCell style={{ textAlign: 'left' }}>
        Cumulative Jobs Added
      </SummaryCell>
      <SummaryCell style={{ textAlign: 'right' }}>
        {formatter(props.total, ',')}
      </SummaryCell>
      <SummaryCell style={{ textAlign: 'left' }}>
        Cumulative Percent Change
      </SummaryCell>
      <SummaryCell style={{ textAlign: 'right' }}>
        {formatter(props.diff, '%')}
      </SummaryCell>
    </SummaryBody>
  </SummaryStatsContainer>
);

export default SummaryStats;
