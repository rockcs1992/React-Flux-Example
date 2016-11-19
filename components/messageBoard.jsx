import React from 'react';
import MessageList from './messageList.jsx';
import MessageForm from './messageForm.jsx';
import ListStore from '../stores/ListStore.jsx';
import ButtonActions from '../Actions/Actions.jsx';

export default class  MessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	data : ListStore.getAll()
        };
     //   this.updateStore = this.updateStore.bind(this);
    }

    componentWillMount(){
        ListStore.addChangeListener(this.updateStore.bind(this));
    }

    componentWillUnmount(){
        ListStore.removeChangeListener(this.updateStore.bind(this));
    }

    submitHandler(newdata){
    	ButtonActions.addNewItem(newdata);
    }

    updateStore(){
        this.setState({
            data : ListStore.getAll()
        });
    }
    
    render() {
        return (
        	<div>
        		<MessageForm  onMessageSubmit={this.submitHandler.bind(this)}/>
        		<MessageList messages={this.state.data} />
        	</div>
        )
    }
}









