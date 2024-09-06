import { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import './style/ConsultPage.css';

function Consult() {
  const [category, setCategory] = useState('Computer Hardware');
  const [issue, setIssue] = useState('');
  const [hardwareDetails, setHardwareDetails] = useState('');
  const [validated, setValidated] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setHardwareDetails(''); // Reset hardware details if category changes
  };

  const handleIssueChange = (e) => setIssue(e.target.value);
  const handleHardwareDetailsChange = (e) => setHardwareDetails(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (issue.trim() === '') {
      setValidated(true);
    } else {
      setValidated(false);
      // Submit form logic here
      alert('Form submitted successfully!');
    }
  };

  return (
    <Container className="py-5">
      <h2>Consultation Request</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="categorySelect">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" value={category} onChange={handleCategoryChange} required>
            <option>Computer Hardware</option>
            <option>Software</option>
            <option>Websites</option>
          </Form.Control>
        </Form.Group>

        {category === 'Computer Hardware' && (
          <Form.Group controlId="hardwareDetails">
            <Form.Label>Hardware Details</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter specific hardware details (e.g., GPU, CPU, etc.)"
              value={hardwareDetails}
              onChange={handleHardwareDetailsChange}
            />
          </Form.Group>
        )}

        <Form.Group controlId="issueTextarea">
          <Form.Label>Describe your issue</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={issue}
            onChange={handleIssueChange}
            required
          />
          {validated && !issue.trim() && (
            <Alert variant="danger" className="mt-2">
              Please describe your issue.
            </Alert>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Consult;
