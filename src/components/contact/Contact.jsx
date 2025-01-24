import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Bio } from "../bio/Bio";
import telegramLogo from '../../assets/images/telegram.png'
import vkLogo from '../../assets/images/vk.png'
import emailLogo from '../../assets/images/email.png'
import './Contact.css'

const ContactModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={'contact-modal'}>
            <Bio openModal={handleShow} />

            <Modal
                show={show}
                onHide={handleClose}
                centered
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "#fff" }}>Контакты</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                            <img src={telegramLogo} alt="@vadimpich"/>
                                <a href="https://t.me/vadimpich" target="_blank" rel="noopener noreferrer"
                                   style={{color: "#fff", textDecoration: "none"}}>
                                    @vadimpich
                                </a>
                        </li>
                        <li style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                            <img src={vkLogo} alt="@vadimpi4"/>
                            <a href="https://vk.com/vadimpi4" target="_blank" rel="noopener noreferrer"
                               style={{color: "#fff", textDecoration: "none" }}>
                                @vadimpi4
                            </a>
                        </li>
                        <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                            <img src={emailLogo} alt="vadimpich@gmail.com"/>
                            <a href="mailto:vadimpich@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
                                vadimpich@gmail.com
                            </a>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ContactModal;
