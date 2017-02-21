import data from '../assets/mock-data.json';
import React from 'react';
import ReactDOM from 'react-dom';
import Sales from './components/Stats';

console.log(`
############################
# Dashboard technical test #
# by Simon Dell            #
############################
`);

// The mock data has awkward key names. They don't make it easy to map onto generic components.
// Some wrangling of the data seems apt

function pickMetrics ( item ) {
	return item != 'line-graph' && item != 'sales';
}

function metricData ( key ) {
	return { title: key, value: data[ key ] };
}
// I know everyone prefers `const foo = () => {}`` these days. Call me old fashioned.

const store = {
	measures: Object.keys( data ).filter( pickMetrics ).map( metricData ),
	sales: data.sales,
	graph: data['line-graph']
};


// Webpack's HTML helper (which creates the index.html) does have template support, but
//  I feel this is cleaner (and avoids using two templating systems for one project)
document.querySelector('body')
	.insertBefore(
		document.createElement('main'),
		document.querySelector('body script')
	);

ReactDOM.render(
	<Sales data={ store } />,
	document.querySelector('main') // React complains about this, but its main objection doesn't apply when we control all the nodes
);
