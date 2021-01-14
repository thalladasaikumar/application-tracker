import React, {useContext} from 'react'
import { Container, Table } from 'react-bootstrap';
import {GlobalContext} from '../context/GlobalState';
import {TableApplicationRecord} from './TableApplicationRecord'

export const TableApplicationsView = () => {

    const {applications} = useContext(GlobalContext);    
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
                            <th>Application status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map(eachRow => (
                            <TableApplicationRecord key={eachRow.id} eachRow={eachRow} />
                        ))}
                    </tbody>
                </Table> }
            </Container>
        </div>
    )
}
