import React, { Component } from 'react';
import styled from 'styled-components';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import US from '../data/us.json';
import JobsMapContext from '../Context';
import { colorize } from '../helpers';

const State = styled.path`
  cursor: pointer;
  stroke: #fff;
  stroke-width: 1;
  stroke-linejoin: bevel;

  &:hover {
    fill: rgba(255, 255, 255, 0.3);
    stroke-width: 2;
  }
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
          fill={
            stateData ? colorize(stateData.jobs, [0, 100000]) : 'transparent'
          }
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
      <MapSvg
        data={context.data.find(d => d.year === context.state.currentYear)}
      />
    )}
  </JobsMapContext.Consumer>
);

export default USMap;
