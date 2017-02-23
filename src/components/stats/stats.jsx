import FormattedNumber from '../number/number';
import React from 'react';
import styles from './stats.css';

function th ( strings, id ) {
	const TH_LABEL = 'metric-th--'
	return `${TH_LABEL}${id}`;
}

export default class Stats extends React.Component {
	getHeadings () {
		return this.props.metrics.map( (m, i) => {
			return (
				<th key={ `th${i}` } id={ th`${i}` }>{ m.title.replace('-',' ') }</th>
			);
		});
	}

	getMetrics () {
		return this.props.metrics.map( (m, i) => {
			return (
				<td key={ `td${i}` } headers={ th`${i}` }>
					<FormattedNumber value={ m.value } />
				</td>
			);
		});
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
