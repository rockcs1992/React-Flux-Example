import React from 'react';

export default class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	value : ''
        };
    }

    submitMessage(e){
    	e.preventDefault();
    	var input  = this.refs.myInput;
    	this.props.onMessageSubmit(this.state.value);
    	//clear input field
    	this.setState({value : ''});
    }

    handleChange(e){
    	e.preventDefault();
    	this.setState({value:e.target.value});
    }
    
    render() {
        return  <form onSubmit={this.submitMessage.bind(this)}>
        			<input type='text' ref='myInput' placeholder='type something here'  
        			 value={this.state.value} onChange={this.handleChange.bind(this)}/>
        			<input type='submit' value='Leave a message' />
        		</form>
    }
}
