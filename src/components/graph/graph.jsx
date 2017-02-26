import * as d3 from 'd3';
import Faux from 'react-faux-dom';
import React from 'react';
import Styles from './graph.css';

export default class Graph extends React.Component {
	render () {
		const data = this.props.data.map( datum => {
			return {
				date: new Date( datum.date ),
				value: datum.value
			};
		});

		const margins = { top: 20, right: 0, bottom: 20, left: 0 };
		const width = 740 - margins.right - margins.left;
		const height = 75 - margins.top - margins.bottom;

		const x = d3.scaleTime()
			.domain( [d3.min( data, datum => datum.date ), d3.max( data, datum => datum.date )] )
			.range( [0, width] );

		const y = d3.scaleLinear()
			.domain( [d3.min( data, datum => datum.value ), d3.max( data, datum => datum.value )] )
			.range( [height, 0] );

		const line = d3.line()
			.x( datum =>  x( datum.date ) )
			.y( datum =>  y( datum.value ) );

		return (
			<svg width="740" height="75">
				<g transform={ `translate(${margins.left},${margins.top})`}>
					<path fill="none"
						stroke="#137DCA"
						strokeWidth="2"
						d={ line( data ) } />
					</g>
			</svg>
		);
	}
}
