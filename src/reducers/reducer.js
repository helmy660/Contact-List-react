import { FETCH_CONTACTS, DELETE_CONTACT } from '../actions/action_types';

// define the initial state that will be replaced by the new state after reducer returned
const initialState = {};


// the reducer takes the previous state and the action and return new state based on the action type
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      if(action.contacts){
        return action.contacts;  
      }
       else {
        return {};
      }
          
    case DELETE_CONTACT:
      return state.filter(contact => contact.is_deleted !== 1);
    //   return state.filter(post => post._id !== action.payload.id);
    
    default:
      return state;
  }
}