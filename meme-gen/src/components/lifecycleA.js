import React from 'react';
import LifeCycleB from './lifecycleB'
class LifeCycleA extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			name : "Randheer"
		}
		console.log('constructor lifecycleA')
	}

	static getDerivedStateFromProps(props){
		console.log('lifecycleA getDerivedStateFromProps')
		return null
	}

	componentDidMount(props){
		console.log('componentDidMount lifecycleA')
	}

	shouldComponentUpdate(){
		console.log('shouldComponentUpdate lifecycleA')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, preState){
		console.log('getSnapshotBeforeUpdate lifecycleA')
		return null
	}

	componentDidUpdate(){
		console.log('LifeCycleA componentDidUpdate')
	}

	changeState = () => {
		this.setState({
			name : 'the best mind of India'
		})
	}

	render(){
		console.log('render lifecycleA')
		return (
			<div>

				<h1>LifecycleA</h1>
				<button onClick={this.changeState}>change state</button>
				<LifeCycleB />
			</div>
		)
	}
}
export default LifeCycleA;