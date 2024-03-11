import { Routes, Route } from 'react-router-dom'
import { Header } from './components'
import { HomePage, About, SignIn, SignUp } from './pages'
import { Box } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Header />
      <Box>
        <Routes>       
          <Route path='/'element={ <HomePage />}/>
          <Route path='/about'element={ <About />}/>
          <Route path='/signin'element={ <SignIn />}/>
          <Route path='/signup'element={ <SignUp />}/>
        </Routes>
      </Box>      
      
    </>
  )
}

export default App
