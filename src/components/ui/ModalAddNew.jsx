/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormAddNew from "./FormAddNew";
import { useState } from "react";
import { postCreateUser } from "../../services/UserService";
import { ToastContainer, toast } from "react-toastify";
const ModalAddNew = (props) => {
    const { show, handleClose } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const handleSaveUser = async () => {
        let res = await postCreateUser(name, job);
        if (res && res.id) {
            handleClose();
            setName("");
            setJob("");
            toast.success("A new user created");
        } else {
            console.log("123");
        }
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="body-add-new">
                    <FormAddNew
                        name={name}
                        job={job}
                        setName={setName}
                        setJob={setJob}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSaveUser()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAddNew;
