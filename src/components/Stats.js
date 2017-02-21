import Metric from './Metric';
import React from 'react';
import SalesSummary from './SalesSummary';

export default class Stats extends React.Component {
	getMetrics () {
		this.props.data.measures.map( m => console.log( m ) );
		return this.props.data.measures.map( m => <Metric key={ m.title } title={ m.title } value={ m.value } /> );
	}

	render () {
		return (
			<section>
				<SalesSummary />
				{ this.getMetrics() }
			</section>
		);
	}
}
