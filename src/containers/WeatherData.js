import React, { Component } from 'react';
import $ from 'jquery';
import { bindActionCreators } from 'redux';
import FetchWeather from '../actions/FetchWeather';
import { connect } from 'react-redux';

class WeatherData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weatherData: []
		}
	}

	componentDidMount() {
		this.props.FetchWeather();
	}

	render(){
		// console.log(this.props.weatherData)
		if(this.props.weatherData.main == undefined){
			return(<h1>Loading...</h1>)
		}
		return(
			<div>
				<h1>Atlanta Weather</h1>
				{this.props.weatherData.main.temp}&#8457;
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		weatherData: state.weather
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		FetchWeather: FetchWeather
	}, dispatch);
}

var thingCreatedByConnectThatKnowsAboutComponentAndReduxStuff = connect(mapStateToProps,mapDispatchToProps)(WeatherData);

export default thingCreatedByConnectThatKnowsAboutComponentAndReduxStuff;