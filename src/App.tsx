import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NavBar from './components/Navbar'
import Categories from './assets/Categories.json'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Header />
        <NavBar categories={Categories}/>
        <Routes>       
          <Route path='/'element={ <Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
