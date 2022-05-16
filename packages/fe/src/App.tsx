
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useStore } from './context/TodoStore'
import { TopBar } from './components/TopBar'

// import { ColorModeContext } from './context/ColorModeContext'
import Home from './pages/Home'
import Settings from './pages/Settings'
import { TodoPage } from './pages/TodoPage'



export const App: React.FC = function App () {
  
  const {savedTheme} = useStore();


  const [mode, setMode] = React.useState<'light' | 'dark'>(savedTheme === 'light' ? 'light' : 'dark')
  
  React.useMemo(
    () =>
      setMode(savedTheme === 'light' ? 'light' : 'dark'),
    [savedTheme]
  )

  
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <>
      {/* <ColorModeContext.Provider value={colorMode}> */}
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <TopBar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/:id' element={<TodoPage />}/>
              <Route path='/settings' element={<Settings/>}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      {/* </ColorModeContext.Provider> */}
    </>
  )
}
