import Metric from './Metric';
import React from 'react';
import SalesSummary from './SalesSummary';
import styles from '../app.css';

export default class Stats extends React.Component {
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
