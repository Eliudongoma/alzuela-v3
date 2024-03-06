import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Info from './components/Info'
//import Categories from './assets/Categories.json'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>       
          <Route path='/'element={ <Home />}/>
        </Routes>
        <Info/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
