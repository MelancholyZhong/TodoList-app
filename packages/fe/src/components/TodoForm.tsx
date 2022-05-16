import { Box, Button, Container, Paper, Rating, TextField, Typography, useThemeProps } from "@mui/material";
import { TodoItem } from '../context/TodoStore';
import { useState } from "react";
import { useStore } from "../context/TodoStore";

interface TodoFormProps{
    buttonName:string,
    onSubmit:()=>void,
}

export function genUniqueId(): string {
    const dateStr = Date
      .now()
      .toString(36); // convert num to base 36 and stringify
  
    const randomStr = Math
      .random()
      .toString(36)
      .substring(2, 8); // start at index 2 to skip decimal point
  
    return `${dateStr}-${randomStr}`;
  }
  




export const TodoForm:React.FC<TodoFormProps>  = function TodoForm ({ onSubmit, buttonName}){
    const [titleValue, setTitleValue] = useState("")
    const [duedateValue, setDuedateValue] = useState("")
    const [descriptionValue, setDescriptionValue] = useState("")
    const [importanceValue, setImportanceValue] = useState(3)

    const {todos, addTodo, completeTodo, removeTodo} = useStore();

    const handlesubmit = () => {
        const newTodo: TodoItem = {
            id: genUniqueId(),
            title:titleValue,
            duedate:duedateValue,
            description:descriptionValue,
            importance:importanceValue,
            completed:false,
        }

        addTodo(newTodo)
        onSubmit()
    }

    return(
        <Paper sx={{ padding: '4'}} elevation={3}>
                <Box padding={4}>
                    <Typography data-testid='create_form_title' variant="h3" align="center">Creating a Todo</Typography>
                    <Box m={3} display="flex" justifyContent='space-evenly' alignItems="center">
                        <TextField required id="title-input" label="Title" variant="outlined" sx = {{width:'35%'}} onChange={(e)=>{setTitleValue(e.target.value)}}/>
                        <TextField id="duedate-input" label="Due Date" variant="outlined" sx = {{width:'35%'}} onChange={(e)=>{setDuedateValue(e.target.value)}}/>
                    </Box>
                    
                    <Box m={3} display="flex" justifyContent='space-evenly' alignItems="center">
                        <TextField
                            id="description-input"
                            label="Description"
                            multiline
                            rows={4}
                            onChange={(e)=>{setDescriptionValue(e.target.value)}}
                            sx = {{width:'80%'}}
                        />
                    </Box>

                    <Box m={3} display="flex" justifyContent='space-evenly' alignItems="center">
                        <div>
                            <Typography variant="h4" component='legend' m={1} align='center'>Importance</Typography>
                            <Box display="flex" justifyContent='space-evenly' alignItems='center'>
                                <Rating id="importance-input" name="importance" value={importanceValue} precision={1} size='large' onChange={(e, newValue)=>{newValue != null ? setImportanceValue(newValue) : setImportanceValue(0)}}/>
                            </Box>
                        </div>
                    </Box>

                    <Box m={3} display="flex" justifyContent='space-evenly' alignItems="center">
                        <Button variant="contained" color='secondary' size='large' onClick={handlesubmit}>{buttonName}</Button>
                    </Box>
                </Box>
            </Paper>
    )
}