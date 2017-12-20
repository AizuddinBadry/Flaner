import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Customer',
		'Agent',
	],
	datasets: [{
		data: [50, 100],
		backgroundColor: [
		'#36A2EB',
		'#07A2AA'
		],
		hoverBackgroundColor: [
		'#36A2EB',
		'#07A2AA'
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