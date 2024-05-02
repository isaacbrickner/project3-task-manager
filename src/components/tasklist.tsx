import {Table, TableCell, TableBody,TableRow,TableContainer,TableHead, Button, Rating} from '@mui/material'
import { useEffect, useState } from 'react'
import { Task } from '../types/types'


export default function Tasklist(props: {entry: Task[], deleteEntry: Function}){

    const [entries, setEntries] = useState(props.entry)
    
    useEffect(()=>{
    },[entries])

    return (<TableContainer>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>
                    Name
                </TableCell>  
                <TableCell>
                    Task
                </TableCell>
                <TableCell>
                    Notes
                </TableCell>
                <TableCell>
                    Delete
                </TableCell>
                <TableCell>
                    Urgency
                </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {props.entry.map((entry, index: number) => (
                    <TableRow key={index}>
                        <TableCell>{entry.name}</TableCell>
                        <TableCell>{entry.language}</TableCell>
                        <TableCell>{entry.comment}</TableCell>
                        <TableCell>
                            <Button variant='contained' value={index} onClick={() => {props.deleteEntry(index)}}>Complete</Button>
                        </TableCell>
                        <TableCell>
                        <Rating
                        readOnly={true}
                        value={entry.rating}
                        />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
        </Table>
    </TableContainer>
    )



}