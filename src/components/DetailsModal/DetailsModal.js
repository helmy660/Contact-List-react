// this modal is to show each contact details if the card is double clicked

import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { CardInfo, Background, ContactImage, ContactDetails, Title1, Title2, IconShape } from "./DetailsModalStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale, faPhone, faAt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

class DetailsModal extends Component {
    render() {
        return (
            <React.Fragment>
                <Modal size="sm" show={this.props.showDetailsFlag} onHide={() => this.props.handleDetailsModal()}>
                    <Card>
                        <CardInfo>
                            <Background></Background>
                            <ContactImage src={this.props.contact.image_url}></ContactImage>
                            <ContactDetails>
                                <Title1>{this.props.contact.first_name} {this.props.contact.last_name}</Title1>
                                <Title2>
                                    <IconShape>
                                        {
                                            this.props.contact.gender === "Male" ? <FontAwesomeIcon icon={faMale} /> : <FontAwesomeIcon icon={faFemale} />
                                        }
                                    </IconShape> &nbsp;{this.props.contact.gender}
                                </Title2>
                                <Title2>
                                    <IconShape><FontAwesomeIcon icon={faBriefcase} /></IconShape> &nbsp;{this.props.contact.company}
                                </Title2>
                                <Title2>
                                    <IconShape><FontAwesomeIcon icon={faPhone} /></IconShape> &nbsp;{this.props.contact.phone}
                                </Title2>
                                <Title2>
                                    <IconShape><FontAwesomeIcon icon={faAt} /></IconShape> &nbsp;{this.props.contact.email}
                                </Title2>
                            </ContactDetails>
                        </CardInfo>
                        <Button variant="dark" size="sm" onClick={() => this.props.handleDetailsModal()}>Ok</Button>
                    </Card>
                </Modal>
            </React.Fragment>
        );
    }
}

export default DetailsModal;