export default function(state = [],action){
	console.log("Weather reducer is running...")
	switch(action.type){
		case "GET_WEATHER":
			// code will run if action.type = "GET_WEATHER"
			console.log("ACTION IN ACTION")
			return action.payload
		case "DoTheHokeyPokey":
			return state;
		default:
		return state;
	}
}