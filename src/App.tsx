import { Routes, Route } from 'react-router-dom'
import { Header, Navbar, Footer, Info } from './components'
import { HomePage, About } from './pages'
import { Box } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Header />
      <Box>
        <Navbar />
        <Routes>       
          <Route path='/'element={ <HomePage />}/>
          <Route path='/about'element={ <About />}/>
        </Routes>
      </Box>      
      <Info/>
      <Footer/>
    </>
  )
}

export default App
