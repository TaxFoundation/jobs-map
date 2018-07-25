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
  color: #fff;
  font-size: 22px;
  padding: 12px;
`;

const SummaryBody = styled.div`
  align-content: center;
  display: grid;
  grid-gap: 18px;
  grid-template: auto / repeat(2, auto);
  padding: 18px;
`;

const SummaryCell = styled.div``;

const SummaryStats = props => (
  <SummaryStatsContainer>
    <SummaryHeader>{props.year}</SummaryHeader>
    <SummaryBody>
      <SummaryCell style={{ textAlign: 'left' }}>
        Cumulative Increase in Full Time Equivalent Jobs
      </SummaryCell>
      <SummaryCell style={{ textAlign: 'right', fontSize: '22px' }}>
        {formatter(props.total, ',')}
      </SummaryCell>
    </SummaryBody>
  </SummaryStatsContainer>
);

export default SummaryStats;
