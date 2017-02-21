import Sales from './components/SalesSummary';
import React from 'react';
import ReactDOM from 'react-dom';

console.log(`
############################
# Dashboard technical test #
# by Simon Dell            #
############################
`);

// Webpack's HTML helper (which creates the index.html) does have template support, but
//  I feel this is cleaner (and avoids using two templating systems for one project)
document.querySelector('body')
	.insertBefore(
		document.createElement('main'),
		document.querySelector('body script')
	);

ReactDOM.render(
	<Sales/>,
	document.querySelector('main') // React complains about this, but its main objection doesn't apply when we control all the nodes
);
