import { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function Consult() {
  // State hooks to manage form fields and validation
  const [category, setCategory] = useState('Computer Hardware'); // Track selected category
  const [issue, setIssue] = useState(''); // Track issue description input
  const [hardwareDetails, setHardwareDetails] = useState(''); // Track hardware details input when 'Computer Hardware' is selected
  const [validated, setValidated] = useState(false); // State for form validation

  // Event handler when category changes
  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // Update selected category
    setHardwareDetails(''); // Clear hardware details if category changes
  };

  // Event handler for issue description input
  const handleIssueChange = (e) => setIssue(e.target.value);

  // Event handler for hardware details input
  const handleHardwareDetailsChange = (e) => setHardwareDetails(e.target.value);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (issue.trim() === '') {
      // If issue description is empty, mark form as invalid
      setValidated(true);
    } else {
      setValidated(false); // Form is valid, proceed with submission
      // Logic to handle form submission (e.g., send data to server)
      alert('Form submitted successfully!');
    }
  };

  return (
    <Container className="py-5">
      <h2>Consultation Request</h2>
      {/* Form component with validation */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="categorySelect">
          <Form.Label>Category</Form.Label>
          {/* Dropdown to select category */}
          <Form.Control as="select" value={category} onChange={handleCategoryChange} required>
            <option>Computer Hardware</option>
            <option>Software</option>
            <option>Websites</option>
          </Form.Control>
        </Form.Group>

        {/* Conditionally render hardware details input if category is 'Computer Hardware' */}
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
          {/* Text area for issue description */}
          <Form.Control
            as="textarea"
            rows={5}
            value={issue}
            onChange={handleIssueChange}
            required
          />
          {/* Display alert if issue description is empty */}
          {validated && !issue.trim() && (
            <Alert variant="danger" className="mt-2">
              Please describe your issue.
            </Alert>
          )}
        </Form.Group>

        {/* Submit button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Consult;
