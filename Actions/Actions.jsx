import AppDispatcher from  '../dispatcher/AppDispatcher.jsx';

const ButtonActions = {
	addNewItem : function(text){
		AppDispatcher.dispatch ({
			type : 'ADD_NEW_ITEM',
			text : text
		});
	}
}

export default ButtonActions;