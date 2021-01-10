import './App.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Header}  from "./Components/Header";

function App() {
  return (
    <div>
      <Header/>
        <Form>
          <Form.Group controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control type="text" placeholder="MM/DD/YYYY" />          
          </Form.Group>

          <Form.Group controlId="formBasicCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Name of the company" />
          </Form.Group>
          
          <Form.Group controlId="formBasicPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control type="text" placeholder="Position applied for" />
          </Form.Group>

          <Form.Group controlId="formBasicJobDescription">
          <Form.Label>Job desciption</Form.Label>
          <Form.Control as="textarea" placeholder="Responsibilites and skills highlighted in job description" />
          </Form.Group>

          <Form.Group controlId="formBasicJobLink">
          <Form.Label>Posting link</Form.Label>
          <Form.Control type="text" placeholder="web link of job posting" />
          </Form.Group>

          <Form.Group controlId="formBasicAppliedThrough">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Applied through recruiter if any" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
          Submit
          </Button>
        </Form>
    </div>
  );
}

export default App;
