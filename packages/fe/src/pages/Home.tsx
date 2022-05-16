import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    SpeedDialIcon,
    Typography
  } from '@mui/material'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import React from 'react'
import { TodoList } from '../components/TodoList'
import create from 'zustand'
import { useStore } from '../context/TodoStore'
import TodoCreate from '../components/TodoCreate'



export default function Home () {
    
    return (
        <>
        <CssBaseline />
        <main>
            <div>
            <Box m={6}>
                <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                Your Todo List
                </Typography>
                <Typography variant='h5' align='center' color='textSecondary' paragraph>
                Keep tracking of what you have done and what you are going to do is a life style.
                </Typography>
            </Box>
            <Container>
                <Box m={4}>
                    <TodoList />
                </Box>
            </Container>
            </div>
            <Box>
                <TodoCreate />
            </Box>
        </main>
        </>
    )
}