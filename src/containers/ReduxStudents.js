import React, {Component} from 'react';
// We need some glue between react and ReduxStudents
// This component/container needs to know about Redux state.
// The answer? The connect method from the react-redux module. The glue
import { connect } from 'react-redux';

// Get our actions...
import SelectStudentAction from '../actions/SelectStudentAction';
// console.log(SelectStudent)
import Timer from '../actions/TimerAction';

// bindActionCreators is a redux function that we will tap into to let ALL reducers know anytime an action occured
import { bindActionCreators } from 'redux';

class ReduxStudents extends Component{
	constructor(props) {
		super(props);	
	}

	componentDidMount() {
		// setInterval(()=>{
		// 	this.props.timerAction();
		// },1000)
	}

	render(){
		// console.log(this.props.students)
		var studentArray = [];
		this.props.students.map((student,index)=>{
			studentArray.push(
				<li
					key={index}
					onClick={()=> {this.props.selectStudent(student)}}
				>
						{student}
				</li>)
		})
		return(
			<div>
				<h1>This is ReduxStudents</h1>
				{studentArray}
				<hr />
				{this.props.selectedStudent} is selected.
				<hr />
				{ /* {this.props.timer} is the apps current time. */ }
			</div>
		)
	}
}

// All containers that need access to state will have this function
// We are creating a mapping between redux state and this component's Props
function mapStateToProps(state){
	// mapStateToProps returns an object with each piece of state we need
	return{
		// From our master Reducer, we have a "state" object (React and Redux are DIFFERENT states)
		// Inside of that state object, we have a property: students
		// This exists because we made it a property in the rootReducer
		students: state.students,
		selectedStudent: state.selectedStudent,
		timer: state.timer
	}

}

// mapDispatchToProps goes out to the dispatcher, grabs an action from it and sets it as a prop of this component.
function mapDispatchToProps(dispatch){
	// bindActionCreators came from above
	return bindActionCreators({
		selectStudent: SelectStudentAction,
		timerAction: Timer
	}, dispatch)
}

// INSTEAD OF exporting the class(component), we export CONNECT
// connect takes 2 arguments WHICH RETURN A FUNCTION that takes 1 argument
// -- connect takes state mapping function (so it's available in component props)
// -- connect takes action mapping function (ditto)
// -- the return function of the connect function, takes a component
export default connect(mapStateToProps,mapDispatchToProps)(ReduxStudents);