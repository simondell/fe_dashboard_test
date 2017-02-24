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
	}

	render () {
		const faux = Faux.createElement('div');

		d3.select(faux)
			.append('div')
			.html('Hello World!')

		return faux.toReact();
	}
}
