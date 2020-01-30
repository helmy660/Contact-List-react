import { FETCH_CONTACTS, DELETE_CONTACT } from './action_types';
import axios from 'axios';

// the api provided from backend
const apiUrl = 'https://test-be.dailymealz.app/api/json/test/users';


// apply this method to fetch all contacts with then and catch to solve asynchronous
export const fetchContacts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchContactsSuccess(response.data));
      })
      .catch(error => {
        throw (error);
      })
  }
}

export const fetchContactsSuccess = (contacts) => {
  return {
    type: FETCH_CONTACTS,
    contacts
  }
}


// apply this method to delete a specific contact using (id) with then and catch to solve asynchronous
export const deleteContact = id => {
  return (dispatch) => {
    return axios.put(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(deleteContactSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      })
  }
}

export const deleteContactSuccess = isDeleted => {
  return {
    type: DELETE_CONTACT,
    payload: {
      isDeleted
    }
  }
}
