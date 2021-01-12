import React from 'react'
import { Container, Table, NavLink } from 'react-bootstrap';

export const TableApplicationsView = () => {
    let storedVal = JSON.parse(localStorage.getItem('applications'))
    if(storedVal!==null){
        storedVal = storedVal.applications
    } else{
        storedVal = []
    }
    let applications = [];
    if(storedVal.length>0){
        storedVal.map((eachRow) => {
            applications.push(JSON.parse(eachRow));
        })
    }
    console.log(applications);
    return (
        <div>
            <Container>
                {applications.length>0 && 
                <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Applied through</th>
                            <th>Job Link</th>
                            <th>Job Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((eachRow, index) => {
                            return(
                                <tr key={index}>
                                    <td>{eachRow.date}</td>
                                    <td>{eachRow.company}</td>
                                    <td>{eachRow.position}</td>
                                    <td>{eachRow.appliedThrough}</td>
                                    <td><NavLink href={eachRow.jobLink}>Link</NavLink></td>
                                    {eachRow.jobDescription && <td>{eachRow.jobDescription}</td>}
                                </tr>
                            )
                        })}
                    </tbody>
                </Table> }
            </Container>
        </div>
    )
}
