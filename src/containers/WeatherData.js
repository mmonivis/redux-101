import React, { Component } from 'react';
import $ from 'jquery';

class WeatherData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weatherData: []
		}
	}

	componentDidMount() {
		const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30324&appid=e312dbeb8840e51f92334498a261ca1d';
		$.getJSON(weatherUrl, (weatherData)=>{
			console.log(weatherData)
			this.setState({
				weatherData: weatherData
			})
		});
	}

	render(){
		if(this.state.weatherData.main == undefined){
			return(<h1>Loading...</h1>)
		}
		return(
			<div>
				<h1>Atlanta Weather</h1>
				{this.state.weatherData.main.temp}&#8457;
			</div>
		)
	}
}

export default WeatherData;