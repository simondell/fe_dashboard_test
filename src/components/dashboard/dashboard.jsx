import Metric from '../metric/metric';
import React from 'react';
import Stats from '../stats/stats';
import SalesSummary from '../sales_summary/sales_summary';
import styles from './dashboard.css';

export default class Dashboard extends React.Component {
	render () {
		return (
			<main className={ styles.dashboard }>
				<SalesSummary data={ this.props.data } />
				<Stats metrics={ this.props.data.metrics } />
			</main>
		);
	}
}
