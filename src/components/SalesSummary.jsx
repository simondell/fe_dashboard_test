import React from 'react';
import Graph from './Graph';
import ProgressBar from './ProgressBar';

export default class SalesSummary extends React.Component {
	render () {
		return (
			<section>
				<h1>Sales vs Target for Week 3</h1>
				<Graph data={ this.props.data.graph } />
				<ProgressBar
					now={ this.props.data.sales.current }
					now-label="Sales"
					max={ this.props.data.sales.target }
					max-label="Target" />
			</section>
		);
	}
}
