import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'Mac', 'April', 'May', 'June', 'Julai', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Jumlah Jualan (RM)',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
}


export default class Sales extends Component{
	render(){
		return(
			<div>
				 <Bar
		          data={data}
		          width={100}
		          height={47}
		        />
			</div>
			)
	}
}