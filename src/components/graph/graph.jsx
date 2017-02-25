import * as d3 from 'd3';
import Faux from 'react-faux-dom';
import React from 'react';
import Styles from './graph.css';

function countDaysFrom ( start ) {
	return function countDays ( datum, i ) {

	}
}

export default class Graph extends React.Component {
	constructor ( props ) {
		super( props );
		this.state = { graph: Faux.createElement('svg') };
	}

	componentDidMount () {
		const { data } = this.props;
		const { graph } = this.state;
		const margins = { top: 0, right: 0, bottom: 10, left: 0 };

		// 740 is magic number.. should be calculated from width of container or similar
		const width = 740 - margins.right - margins.left;
		// i know, i know, they're 0.. I'm learning the convention

		// 75 is magic mumber, measured using crop tool on design.png
		const height = 75 - margins.top - margins.bottom;

		data.forEach( datum => { datum.date = new Date( datum.date ) } );

		const xScale = d3.scaleTime()
			.domain( data.map( datum => data.date ) )
			.range( 0, width );

		const yScale = d3.scaleLinear()
			.domain( [d3.min( data, datum => datum.value ), d3.max( data, datum => datum.value )] )
			.range( [height, 0] );

		d3.select( graph )
			.data( this.props )
			.enter()
			.append()
	}

	render () {
		return this.state.graph.toReact();
	}
}
