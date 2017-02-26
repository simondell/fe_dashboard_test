import * as d3 from 'd3';
import Faux from 'react-faux-dom';
import React from 'react';
import Styles from './graph.css';

export default class Graph extends React.Component {
	constructor ( props ) {
		super( props );

		const data = props.data.map( datum => {
			return {
				date: new Date( datum.date ),
				value: datum.value
			};
		});

		// const { data } = props;

		const margins = { top: 0, right: 0, bottom: 10, left: 0 };

		// 740 is magic number.. should be calculated from width of container or similar
		const width = 740 - margins.right - margins.left;
		// i know, i know, they're 0.. I'm learning the convention

		// 75 is magic mumber, measured using crop tool on design.png
		const height = 75 - margins.top - margins.bottom;

		const x = d3.scaleTime()
			.domain( [d3.min( data, datum => datum.date ), d3.max( data, datum => datum.date )] )
			.rangeRound( [0, width] );

		const y = d3.scaleLinear()
			.domain( [d3.min( data, datum => datum.value ), d3.max( data, datum => datum.value )] )
			.range( [height, 0] );

		const lineGenerator = d3.line()
			.x( datum => { console.log(`x: ${datum.date}, ${x(datum.date)}`); return x( datum.date ); } )
			.y( datum => { console.log(`y: ${datum.value}, ${y(datum.value)}`); return y( datum.value ); } );

		this.state = { data, lineGenerator };
	}

	render () {
		return (
			<svg>
				<path fill="none"
					stroke="steelblue"
					strokeWidth="1.5"
					d={ this.state.lineGenerator( this.state.data ) } />
			</svg>
		);
	}
}
