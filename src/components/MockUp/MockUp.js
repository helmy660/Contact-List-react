import React from 'react';
import { useSelector } from 'react-redux';
import {Iphonex, Title, Span, Wrapper} from './MockUpStyle.js';
import ContactList from "../ContactList/ContactList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';


function MockUp(){
    // get the data from the global store and pass it as props to the ContactList Component to display them
    let contacts = useSelector((state)=> state.contacts);
    return (
        <Iphonex>
            <Title>
                <Wrapper>
                <FontAwesomeIcon icon={faPhone}/>
                <Span>Contacts</Span>
                </Wrapper>
            </Title>
            <ContactList contacts={contacts}></ContactList>
        </Iphonex>
    );
}

export default MockUp;