import React, { Component } from 'react';
import ContactItem from "../ContactItem/ContactItem";
import { List, ListWrapper } from './ContactListStyle';

class ContactList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }

    // to receive the data after dispatch()
    componentWillReceiveProps(nextProps){
        const newContacts = [...nextProps.contacts];
        this.setState({arr: [...newContacts]});
    }

    // to delete a specific contact with (id) passed from the child component
    // return only 100 elements because i don't know the query params to handle the returned data from api
    onDeleteContact = (id)=> {
        let newContacts = Array.prototype.filter.call(this.state.arr ,(contact, index)=> {
            if (index < 100) return contact.id !== id
        })
        this.setState({arr: [...newContacts]});
    }

    // return only 100 elements because i don't know the query params to handle the returned data from api
    render() {
        return (
            <ListWrapper>
                <List>
                    {Array.prototype.map.call(this.state.arr, (contact, index) => {
                        if (index < 100) return <ContactItem key={index} contact={contact} index={index} onDeleteContact={()=>this.onDeleteContact(contact.id)}></ContactItem>
                    }
                    )}
                </List>
            </ListWrapper>
        );
    }
}

export default ContactList;