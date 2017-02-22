import Metric from './Metric';
import React from 'react';
import SalesSummary from './SalesSummary';

export default class Stats extends React.Component {
	getMetrics () {
		return this.props.data.measures.map( m => {
			return <Metric key={ m.title } title={ m.title } value={ m.value } />;
		});
	}

	render () {
		return (
			<section>
				<SalesSummary data={ this.props.data } />
				{ this.getMetrics() }
			</section>
		);
	}
}
