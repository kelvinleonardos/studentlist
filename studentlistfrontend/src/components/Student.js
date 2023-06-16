import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@material-ui/core';

export default function Student() {
    const paperstyle = { padding: '50px 20px', width: 600, margin: '20px auto' }
    const [name, setName] = React.useState('')
    const [address, setAddress] = React.useState('')
    const[students, setStudents] = React.useState([])

    const click=(e)=>{
        e.preventDefault()
        const student={name, address}
        console.log(student)
        fetch("http://localhost:8080/student/add", {
            method:'POST', 
            headers:{"Content-Type":"application/json"}, 
            body: JSON.stringify(student)
        }).then(()=>{
            console.log("New student added")
        })
    }

    React.useEffect(()=>{
        fetch("http://localhost:8080/student/getAll").then(res=>res.json()).then((result)=>{
            setStudents(result);
        })
    }, [])

    return (

        <Container>
            <Paper elevation={3} style={paperstyle}>
                <h1>Add Student</h1>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Name" variant="standard" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField id="standard-basic" label="Address" variant="standard" fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button variant="contained" onClick={click}>Submit</Button>
                </Box>
            </Paper>
            <Paper elevation={3} style={paperstyle}>
                {students.map(student=>(
                    <Paper elevation={6} key={student.id}>
                        Id:{student.id}
                        <br></br>
                        Name:{student.name}
                        <br></br>
                        Address:{student.address}
                        <br></br>
                    </Paper>
                ))}
            </Paper>
        </Container>

    );
}
