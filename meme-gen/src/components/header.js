import React from 'react';

class Header extends React.Component {
	constructor(){
		super()

	}

	render(){
		return (
			<header>
    			<h1>Most important heading here</h1>
    			<h3>Less important heading here</h3>
    			<p>Some additional information here</p>
  			</header>
		)
	}
}
export default Header;