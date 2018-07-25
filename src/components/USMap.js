import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import US from '../data/us.json';
import JobsMapContext from '../Context';
import { colorize, formatter } from '../helpers';
import Tooltip from './Tooltip';

const State = styled.path`
  cursor: pointer;
  stroke: #fff;
  stroke-width: 1;
  stroke-linejoin: bevel;
`;

const tooltipText = (diff, stateData) => `
  <p style="text-align: center; font-weight: 700;">${stateData.name}</p>
  <div style="display: table-row; margin-bottom: 40px; padding: 6px;">
    <p style="display: table-cell">Cumulative Jobs Added:</p>
    <p style="display: table-cell; text-align: right">
      ${formatter(stateData.jobs, ',')}
    </p>
  </div>
  <div style="display: table-row; padding: 6px;">
    <p style="display: table-cell"> Cumulative Percent Change:</p>
    <p style="display: table-cell; text-align: right">
      ${formatter(diff, '%')}
    </p>
  </div>
`;

class MapSvg extends Component {
  constructor(props) {
    super(props);

    this.scale = 780;
    this.xScale = 600;
    this.yScale = 400;
    this.xScalar = this.xScale / 600;
    this.yScalar = this.yScale / 400;
  }
  render() {
    const path = geoPath().projection(
      geoAlbersUsa()
        .scale(this.scale)
        .translate([this.xScale / 2, this.yScale / 2 - 25])
    );

    const states = feature(US, US.objects.states).features.map(d => {
      let stateData = this.props.data.states.find(s => {
        return +s.fips === +d.id;
      });

      return (
        <State
          d={path(d)}
          key={`state-${d.id}`}
          fill={colorize(this.props.data.diff, [0, 0.01])}
          data-tip={
            stateData ? tooltipText(this.props.data.diff, stateData) : null
          }
          data-for="usmap"
          data-html={true}
        />
      );
    });

    return (
      <svg width="100%" viewBox={`0 0 ${this.xScale} ${this.yScale}`}>
        {states}
      </svg>
    );
  }
}

const USMap = () => (
  <JobsMapContext.Consumer>
    {context => (
      <Fragment>
        <MapSvg
          data={context.data.find(d => d.year === context.state.currentYear)}
        />
        <Tooltip id="usmap" aria-haspopup="true" />
      </Fragment>
    )}
  </JobsMapContext.Consumer>
);

export default USMap;
