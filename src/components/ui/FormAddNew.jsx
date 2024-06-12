import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormAddNew(props) {
    const { name, job, setName, setJob } = props;
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Job</Form.Label>
                <Form.Control
                    type="text"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                />
            </Form.Group>
        </Form>
    );
}

export default FormAddNew;
