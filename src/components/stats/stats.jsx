import Metric from '../metric/metric';
import React from 'react';
import styles from './stats.css';

function th ( strings, id ) {
	const TH_LABEL = 'metric-th--'
	return `${TH_LABEL}${id}`;
}

export default class Stats extends React.Component {
	getHeadings () {
		return this.props.metrics.map( (m, i) => <th key={ `th${i}` } id={ th`${i}` }>{ m.title }</th> );
	}

	getMetrics () {
		return this.props.metrics.map( (m, i) => <td key={ `td${i}` } headers={ th`${i}` }>{ m.value }</td> );
	}

	render () {
		return (
			<table className={ styles.stats }>
				<tbody><tr>
				{ this.getMetrics() }
				</tr></tbody>
				<tfoot><tr>
				{ this.getHeadings() }
				</tr></tfoot>
			</table>
		);
	}
}
