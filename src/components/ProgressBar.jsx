import React from 'react';
import Number from './Number';

export default class ProgressBar extends React.Component {
	render () {
		return (
			<div role="progressbar"
				aria-valuenow={ this.props['now-label'] }
				aria-valuemin="0"
				aria-valuemax={ this.props['max'] }
				aria-valuetext={ this.props['max-label'] }
			>
				<span className="now">
					<span className="now-label">{ this.props['now-label'] }</span>
					<span className="now-value"><Number value={ this.props['now'] } /></span>
				</span>
				<span className="max-label">{ this.props['max-label'] }</span>
				<span className="max"><Number value={ this.props['max'] } /></span>
			</div>
		);
	}
}
