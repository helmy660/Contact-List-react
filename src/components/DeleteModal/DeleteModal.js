// this modal is to confirm a contact delete

import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class DeleteModal extends Component {
    render() {
        return (
            <React.Fragment>
                <Modal show={this.props.confirmDeleteFlag} onHide={() => this.props.handleDeleteModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this contact?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.handleDeleteModal()}>
                            No
                        </Button>
                        <Button variant="primary" onClick={() => this.props.removeContact()}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default DeleteModal;