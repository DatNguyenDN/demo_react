/* eslint-disable no-unused-vars */
import { Container } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import ModalAddNew from "./components/ui/ModalAddNew";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
function App() {
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

    const handleClose = () => {
        setIsShowModalAddNew(!isShowModalAddNew);
    };
    return (
        <>
            <div className="app-container">
                <Header />
                <Container>
                    <div className="my-3 add-new ">
                        <b> List Users:</b>
                        <button
                            className="btn btn-success"
                            onClick={() => setIsShowModalAddNew(true)}
                        >
                            Add new user
                        </button>
                    </div>
                    <TableUsers />
                </Container>

                <ModalAddNew
                    show={isShowModalAddNew}
                    handleClose={handleClose}
                />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                // transition: Bounce,
            />

            <ToastContainer />
        </>
    );
}

export default App;
