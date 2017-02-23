import Metric from '../metric/metric';
import React from 'react';
import SalesSummary from '../sales_summary/sales_summary';
import styles from './dashboard.css';

export default class Dashboard extends React.Component {
	getMetrics () {
		return this.props.data.measures.map( m => {
			return <Metric key={ m.title } title={ m.title } value={ m.value } />;
		});
	}

	render () {
		return (
			<main className={ styles.dashboard }>
				<SalesSummary data={ this.props.data } />
				{ this.getMetrics() }
			</main>
		);
	}
}
