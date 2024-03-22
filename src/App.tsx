import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import { CartPage, HomePage, AboutPage, SignInPage, SignUpPage } from "./pages";
import { Header } from "./components";
import { Product } from "./components/interfaces/Product";
import { ProductsContext } from "./contexts";
import CartContext, { CartProducts } from "./contexts/CartContext";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<CartProducts>({
    count: 0,
    ids: {},
  });
  // With contexts, you can access the data (products/cartProducts) from any file
  return (
    <>
<<<<<<< HEAD
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
      
=======
      <CartContext.Provider value={{ cartProducts, setCartProducts }}>
        <Header />
        <Box>
          <ProductsContext.Provider value={{ products, setProducts }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/addtocart" element={<CartPage />} />
            </Routes>
          </ProductsContext.Provider>
        </Box>
      </CartContext.Provider>
>>>>>>> 003b1dfb55e3bac04a2ad01c44cd46ab2688a097
    </>
  );
}

export default App;
