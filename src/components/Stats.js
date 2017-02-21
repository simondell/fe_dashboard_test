import Metric from './Metric';
import React from 'react';
import SalesSummary from './SalesSummary';

export default class Stats extends React.Component {
	render () {
		return (
			<section>
				<SalesSummary />
				<Metric title="Vehicles made" value="23" />
				<Metric title="Retail orders" value="23" />
				<Metric title="Online orders" value="23" />
				<Metric title="Configurations completed" value="23" />
				<Metric title="Test drives arranged" value="23" />
			</section>
		);
	}
}
