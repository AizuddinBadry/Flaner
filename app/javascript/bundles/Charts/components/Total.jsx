import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Customer',
		'Agent',
		'Product'
	],
	datasets: [{
		data: [50, 100, 30],
		backgroundColor: [
		'#36A2EB',
		'#07A2AA',
		'#F4D03F'
		],
		hoverBackgroundColor: [
		'#36A2EB',
		'#07A2AA',
		'#F4D03F'
		]
	}]
};

export default class Total extends Component{
	render(){
		return(
			<div>
				<Pie 
					data={data}
				 />
			</div>
			)
	}
}