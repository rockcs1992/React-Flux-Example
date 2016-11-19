import React from 'react';

export default class  MessageList extends React.Component {
    render() {
    	var messages = this.props.messages.map((data,index) => {
    		return <li key={index}>{data}</li>
    	})

    	return <ul>
    			{messages}
    		   </ul>;
    }
}

