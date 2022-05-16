import { Box, Button, Paper, Rating, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

import { TodoItem, useStore } from '../context/TodoStore'
import { genUniqueId } from './TodoForm'

interface PageFormProps {
  buttonName: string
  originalItem: TodoItem
  onSubmit: () => void
}

export const PageForm: React.FC<PageFormProps> = function PageForm ({ originalItem, onSubmit, buttonName }) {
  const [titleValue, setTitleValue] = useState(originalItem.title)
  const [duedateValue, setDuedateValue] = useState(originalItem.duedate)
  const [descriptionValue, setDescriptionValue] = useState(originalItem.description)
  const [importanceValue, setImportanceValue] = useState(originalItem.importance)

  const { todos, addTodo, completeTodo, removeTodo } = useStore()

  const handlesubmit = () => {
    const newTodo: TodoItem = {
      id: genUniqueId(),
      title: titleValue,
      duedate: duedateValue,
      description: descriptionValue,
      importance: importanceValue,
      completed: false
    }

    addTodo(newTodo)
    onSubmit()
  }

  return (
    <Paper sx={{ padding: '4' }} elevation={3}>
      <Box padding={4}>
        <Typography data-testid='page_form_title' variant='h3' align='center'>
          Editing a Todo
        </Typography>
        <Box m={3} display='flex' justifyContent='space-evenly' alignItems='center'>
          <TextField
            required
            id='title-input'
            label='Title'
            variant='outlined'
            sx={{ width: '35%' }}
            value={titleValue}
            onChange={(e) => {
              setTitleValue(e.target.value)
            }}
          />
          <TextField
            id='duedate-input'
            label='Due Date'
            variant='outlined'
            sx={{ width: '35%' }}
            value={duedateValue}
            onChange={(e) => {
              setDuedateValue(e.target.value)
            }}
          />
        </Box>

        <Box m={3} display='flex' justifyContent='space-evenly' alignItems='center'>
          <TextField
            id='description-input'
            label='Description'
            multiline
            rows={4}
            value={descriptionValue}
            onChange={(e) => {
              setDescriptionValue(e.target.value)
            }}
            sx={{ width: '80%' }}
          />
        </Box>

        <Box m={3} display='flex' justifyContent='space-evenly' alignItems='center'>
          <div>
            <Typography variant='h4' component='legend' m={1} align='center'>
              Importance
            </Typography>
            <Box display='flex' justifyContent='space-evenly' alignItems='center'>
              <Rating
                id='importance-input'
                name='importance'
                value={importanceValue}
                precision={1}
                size='large'
                onChange={(e, newValue) => {
                  newValue != null ? setImportanceValue(newValue) : setImportanceValue(0)
                }}
              />
            </Box>
          </div>
        </Box>

        <Box m={3} display='flex' justifyContent='space-evenly' alignItems='center'>
          <Button variant='contained' color='secondary' size='large' onClick={handlesubmit}>
            {buttonName}
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}
