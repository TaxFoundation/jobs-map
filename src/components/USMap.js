import React, { Component } from 'react';
import styled from 'styled-components';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import US from '../data/us.json';
import JobsMapContext from '../Context';

const State = styled.path`
  cursor: pointer;
  fill: #0094ff;
  stroke: #fff;
  stroke-width: 1;
  stroke-linejoin: bevel;

  &:hover {
    fill: rgba(255, 255, 255, 0.3);
    stroke-width: 2;
  }
`;

export default class USMap extends Component {
  constructor() {
    super();

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
      return <State d={path(d)} key={`state-${d.id}`} />;
    });

    return (
      <JobsMapContext.Consumer>
        {context => (
          <svg width="100%" viewBox={`0 0 ${this.xScale} ${this.yScale}`}>
            {states}
          </svg>
        )}
      </JobsMapContext.Consumer>
    );
  }
}
