'use client';
//import use state
import { useState, useEffect } from 'react';
import { TextField, Box, MenuItem, Button, Rating, Typography } from '@mui/material';

export default function TaskForm(props: {addEntry: Function}){

    const tasks = [
        {
          value: 'Cleaning',
        },
        {
          value: 'Homework',
        },
        {
          value: 'Personal',        
        },
        {
          value: 'Appointment(s)',
        },
      ];

    const [rating, setRating] = useState<number | null>();
    const [name, setName] = useState<string>("")
    const [task, setTask] = useState<string>("")
    const [comment, setComment] = useState<string>("")
    const [button, setButton] = useState<string>("")

    function handleLangChange(event: React.ChangeEvent<HTMLInputElement>){
        setTask(event.target.value)
    }

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
      };

    function handleCommentChange(event: React.ChangeEvent<HTMLInputElement>){
        setComment(event.target.value);
      };
    
    function handleButton(event: React.MouseEvent<HTMLButtonElement>){
      
        const info = {
            name: name,
            language: task,
            comment: comment,
            rating: rating
        }
        props.addEntry(info)
}
    useEffect(()=>{
        console.log(name, task);
    },[name, task, comment, button])

    return(
        <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent:'space-evenly',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="name-text" label="Enter task" variant="outlined" value={name} onChange={handleNameChange} />
      <TextField
          id="outlined-select"
          select
          label="Select"
          defaultValue=""
          helperText="What Type of Task?"
          onChange={handleLangChange}
        >
          {tasks.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
            placeholder="Comments"
            multiline
            rows={5}
            maxRows={Infinity} onChange={handleCommentChange}/>
            <Button variant="outlined" onClick={handleButton}>Submit</Button>
            <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Urgency</Typography>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
      </Box>

    </Box>
    )
    
}


