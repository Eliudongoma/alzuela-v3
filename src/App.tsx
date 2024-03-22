import { Routes, Route } from 'react-router-dom'
import { Header } from './components'
import { HomePage, About, SignIn, SignUp } from './pages'
import { Box } from '@chakra-ui/react'
import AddToCart from './pages/AddToCart'

function App() {

  return (
    <>
      <Header />
      <Box bg={'gray.50'} px={12} >
        <Routes>       
          <Route path='/'element={ <HomePage />}/>
          <Route path='/about'element={ <About />}/>
          <Route path='/signin'element={ <SignIn />}/>
          <Route path='/signup'element={ <SignUp />}/>
          <Route path='/addtocart'element={ <AddToCart />}/>
        </Routes>
      </Box>      
      
    </>
  )
}

export default App
