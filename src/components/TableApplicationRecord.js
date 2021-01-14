import React,{useContext} from 'react'
import {Dropdown ,DropdownButton, NavLink } from 'react-bootstrap';
import {GlobalContext} from '../context/GlobalState'
 

export const TableApplicationRecord = ({eachRow}) => {
    const {updateApplication} = useContext(GlobalContext);
    return (
        <>                                
            <tr>
                <td>{eachRow.date}</td>
                <td>{eachRow.company}</td>
                <td>{eachRow.position}</td>
                <td>{eachRow.appliedThrough}</td>
                <td><NavLink href={eachRow.jobLink}>Link</NavLink></td>
                <td>{eachRow.jobDescription}</td>
                <td>
                <DropdownButton title={eachRow.applicationStatus}>
                    <Dropdown.Item onClick = {(e) => updateApplication(eachRow.id,"Applied")} >Applied</Dropdown.Item>
                    <Dropdown.Item onClick = {(e) => updateApplication(eachRow.id,"In-progress")} >In-progress</Dropdown.Item>
                    <Dropdown.Item onClick = {(e) => updateApplication(eachRow.id,"Rejected")} >Rejected</Dropdown.Item>
                </DropdownButton>
                </td>
            </tr>
                            
        </>
    )
}
