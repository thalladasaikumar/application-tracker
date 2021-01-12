import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export const AddTransaction = () => {
    let applications = [];

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedVal = localStorage.getItem('applications')
        if(storedVal===null){
            applications = []
        } else{
            applications = JSON.parse(storedVal).applications
        }
        
        const formData = {
            company: company,
            position: position,
            date: date,
            jobLink: jobLink,
            appliedThrough: appliedThrough,
            jobDescription: jobDescription
        }

        applications.push(JSON.stringify(formData))
        localStorage.setItem('applications', JSON.stringify({applications: applications}))
        setCompany("")
        setPosition("")
        setJobLink("")
        setDate("")
        setAppliedThrough("")
        setJobDescription("")
    }

    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [jobLink, setJobLink] = useState("");
    const [date, setDate] = useState("");
    const [appliedThrough, setAppliedThrough] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    return (
        <div>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" 
                                value={company} 
                                onChange={e => setCompany(e.target.value)}/>
                        </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Position</Form.Label>
                        <Form.Control type="text" 
                            value={position}
                            onChange={e => setPosition(e.target.value)}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="text" 
                                value={date}
                                onChange={e=>setDate(e.target.value)}/>
                        </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Applied through</Form.Label>
                        <Form.Control type="text" 
                            value={appliedThrough}
                            onChange={e=>setAppliedThrough(e.target.value)}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Job Link</Form.Label>
                        <Form.Control type="text" 
                            value={jobLink}
                            onChange={e=>setJobLink(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control as="textarea" rows={3} 
                            value={jobDescription}
                            onChange={e=>setJobDescription(e.target.value)}/>
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
