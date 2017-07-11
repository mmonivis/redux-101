// reducers get state and action as params
// all reducers get EVERY action. the action object is in the action param

var SelectedStudentReducer = function(state = "No one", action){
	if(action.type == 'PICK_STUDENT'){
		return action.payload;
	}else if(action.type == 'TIMER_TICK'){
		var newState = state + action.payload;
		return newState;
	}
	return state;
}

export default SelectedStudentReducer;