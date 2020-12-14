import React from 'react';

class LifeCycleB extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			name : "Randheer"
		}
		console.log('constructor LifeCycleB')
	}

	static getDerivedStateFromProps(props){
		console.log('lifecycleA getDerivedStateFromProps')
		return null
	}

	componentDidMount(props){
		console.log('componentDidMount LifeCycleB')
	}


	render(){
		console.log('render LifeCycleB')
		return (
			<div>

				LifecycleB
			</div>
		)
	}
}
export default LifeCycleB;