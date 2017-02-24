import * as d3 from 'd3';
import Faux from 'react-faux-dom';
import React from 'react';
import Styles from './graph.css';

export default class Graph extends React.Component {
	constructor ( props ) {
		super( props );
		console.log( 'graph!', props );

		this.state = {
			chart: 'loading...'
		};
	}

	componentDidMount () {
		const faux = Faux.Element('div.renderedD3', 'chart')

		d3.select(faux)
			.append('div')
			.html('Hello World!')
	}

	render () {
		return (
			<div>
				<h2>Here is some fancy data:</h2>
				<div className='renderedD3'>
					{this.state.chart}
				</div>
			</div>
		);
	}
}
