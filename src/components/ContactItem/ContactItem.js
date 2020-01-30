import React, { Component } from 'react';
import { BorderBottom, Wrapper, DeleteBtn, Card, Details, ContactDetails, ContactImage, ContactName } from "./ContactItemStyle";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


class ContactItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isDragged: false,            // flag to check dragging
            showDetailsFlag: false,      // flag to check showing contact details
            confirmDeleteFlag: false,    // flag to check deleting contact
            isSwiped: false,             // flag to check swipping
            startX: 0,
            left: 0,
        }
    }

    // The mouseup event is fired when a button (mouse or trackpad) is released while the pointer is located inside it. 
    // The touchend event is like mouseup event but (for touch screens only)
    componentDidMount() {
        window.addEventListener("mouseup", this.onDragEndMouse);
        window.addEventListener("touchend", this.onDragEndTouch);
    }

    // to control the start of the drag
    // use requestAnimationFrame(callback) to tell the browser to perform an animation
    // it requests that the browser calls a specified function to update an animation
    onDragStart = (x) => {
        this.setState({ isDragged: true, startX: x });
    }

    // to control the end of the drag
    onDragEnd = () => {
        if (this.state.isDragged) {
            this.setState({ isDragged: false });
            if (this.state.left < -66 && !this.state.isSwiped) {
                this.setState({ left: -66, isSwiped: true });
            } else {
                this.setState({ left: 0, isSwiped: false });
            }
        }
    }

    // pass the start point of the event and pass it to onDragStart()
    // fire mousemove event when a mouse is moved
    onDragStartMouse = (e) => {
        this.onDragStart(e.clientX);
        window.addEventListener("mousemove", this.onMouseMove);
    }

    // remove mousemove event when mouse is released
    // call onDragEnd() to handle swipe
    onDragEndMouse = (e) => {
        window.removeEventListener("mousemove", this.onMouseMove);
        this.onDragEnd();
    }

    // pass the start point of the event and pass it to onDragStart()
    // fire touchmove event when touchpad is moved
    onDragStartTouch = (e) => {
        const touch = e.targetTouches[0];
        this.onDragStart(touch.clientX);
        window.addEventListener("touchmove", this.onTouchMove);
    }

    // remove mousemove event when touchpad is released
    // call onDragEnd() to handle swipe
    onDragEndTouch = (e) => {
        window.removeEventListener("touchmove", this.onTouchMove);
        this.onDragEnd();
    }

    // fire mousemove event when a mouse is moved while pressed
    onMouseMove = (e) => {
        const left = e.clientX - this.state.startX;
        if (left < 0) {
            this.setState({ left: left });
        }
    }

    // fire mousemove event when touchpad is moved while pressed
    onTouchMove = (e) => {
        const touch = e.targetTouches[0];
        const left = touch.clientX - this.state.startX;
        if (left < 0) {
            this.setState({ left: left });
        }
    }

    // to control show and hide the Details Modal
    handleDetailsModal = () => {
        this.setState({ showDetailsFlag: !this.state.showDetailsFlag });
        this.setState({ isSwiped: false });
    }

    // to control show and hide the Delete Modal
    handleDeleteModal = () => {
        this.setState({ confirmDeleteFlag: !this.state.confirmDeleteFlag, isSwiped: false });
    }

    // to remove a specific contact by calling onDeleteContact() from parent 
    removeContact = () => {
        this.props.onDeleteContact();
        this.setState({ isSwiped: false });
        this.setState({ confirmDeleteFlag: false });
    }


    render() {
        return (
            <Wrapper>
                {
                    this.state.showDetailsFlag && <DetailsModal contact={this.props.contact} showDetailsFlag={this.state.showDetailsFlag} handleDetailsModal={this.handleDetailsModal}></DetailsModal>
                }
                <Card
                    status={this.state.isSwiped}
                    onDoubleClick={this.handleDetailsModal}
                    onMouseDown={this.onDragStartMouse}
                    onTouchStart={this.onDragStartTouch}
                >
                    <ContactImage src={this.props.contact.image_url}></ContactImage>
                    <Details>
                        <ContactName>{this.props.contact.first_name} {this.props.contact.last_name}</ContactName>

                        {!this.state.isSwiped &&
                            <>
                                <ContactDetails>{this.props.contact.phone}</ContactDetails>
                                <ContactDetails>{this.props.contact.company}</ContactDetails>
                            </>
                        }

                    </Details>
                    <BorderBottom></BorderBottom>
                </Card>
                <DeleteBtn onClick={this.handleDeleteModal}>
                    <FontAwesomeIcon icon={faTrash} />
                </DeleteBtn>
                {
                    this.state.confirmDeleteFlag && <DeleteModal confirmDeleteFlag={this.state.confirmDeleteFlag} handleDeleteModal={this.handleDeleteModal} removeContact={this.removeContact}></DeleteModal>
                }
            </Wrapper>
        );
    }
}

export default ContactItem;