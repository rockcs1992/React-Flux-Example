import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';

 class ListStore extends EventEmitter {
	constructor(){
		super();
		this.items = ['take a walk'];
	}

	addNewItemHandler(text){
		this.items.push(text);
	}

	getAll(){
		return this.items;
	}

	emitChange(){
		this.emit('change');
	}

	addChangeListener(callback){
		this.on('change',callback);
	}

	removeChangeListener(callback) {
		this.removeListner('change',callback);
	}

	handleActions(action){
		switch(action.type){
		case 'ADD_NEW_ITEM' : 
			this.addNewItemHandler(action.text);
			this.emitChange();
			break;
		}
	}
}

const listStore = new ListStore();

AppDispatcher.register(function (action) {
  switch(action.type) {
    case 'ADD_NEW_ITEM':
      this.addNewItemHandler(action.text);
      this.emitChange();
      break;
  	}
}.bind(listStore));

export default listStore;

