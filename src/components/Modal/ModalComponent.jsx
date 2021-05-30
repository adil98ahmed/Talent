import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalBody from "../Modal-Body/Modal-Body";
import "./ModalStyle.css";
function ModalComponent() {
  function ModalFun() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="success" onClick={handleShow}>
          Add New
        </Button>

        <Modal show={show} onHide={handleClose}>
          <div className="modal-header d-flex justify-content-between">
            <Modal.Header closeButton>
              <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
          </div>
          <Modal.Body>
            <ModalBody></ModalBody>
          </Modal.Body>
          <Modal.Footer>
            <div className="modelFooter w-100 d-flex justify-content-between">
              <a className="pt-2 " href="#">
                <p className="text-muted">Reset Fields</p>
              </a>
              <div>
                <Button variant="light" onClick={handleClose}>
                  cancel
                </Button>
                <Button variant="success" onClick={handleClose}>
                  Add User
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return <ModalFun />;
}

export default ModalComponent;
