import { Typography, Grid} from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import * as React from 'react'
import { useStore } from '../context/TodoStore'
import { FinishedCard } from './FinishedCard'
import { TodoCard } from './TodoCard'


export const TodoList: React.FC = function TodoList() {
  const {todos, addTodo, removeTodo, completeTodo} = useStore()

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <Typography data-testid='todos_title' variant='h4' align='center' color='textPrimary' gutterBottom>
          Todos
        </Typography>
        <Stack spacing={3}>
          {todos.filter(i=>i.completed === false).map(item=>(<TodoCard key={item.id} item={item} handleComplete={completeTodo}/>))}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Typography data-testid='finished_todos_title' variant='h4' align='center' color='textPrimary' gutterBottom>
          Finished Todos
        </Typography>
        <Stack spacing={3}>
          {todos.filter(i=>i.completed === true).map(item=>(<FinishedCard key={item.id} item={item} handleRemove={removeTodo}/>))}
        </Stack>
      </Grid>
    </Grid>
  )
}
