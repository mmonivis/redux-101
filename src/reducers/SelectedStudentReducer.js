// reducers get state and action as params
// all reducers get EVERY action. the action object is in the action param

var SelectedStudentReducer = function(state = "No one", action){
	if(action.type == 'PICK_STUDENT'){
		return action.payload;
	}else{
		return state;
	}
	return state;
}

export default SelectedStudentReducer;