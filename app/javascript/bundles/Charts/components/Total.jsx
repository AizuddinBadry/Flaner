import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Prospek',
		'Pelanggan',
		'Ejen',
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#07A2AA'
		],
		hoverBackgroundColor: [
		'#FF6384',
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
					width={500}
    				height={500}
				 />
			</div>
			)
	}
}