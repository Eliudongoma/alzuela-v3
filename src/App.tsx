import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import { CartPage, HomePage, AboutPage, SignInPage, SignUpPage } from "./pages";
import { Header } from "./components";
import CartContext, { CartProducts } from "./contexts/CartContext";

function App() {
  const [cartProducts, setCartProducts] = useState<CartProducts>({
    count: 0,
    ids: {},
  });

  return (
    <>
      <CartContext.Provider value={{ cartProducts, setCartProducts }}>
        <Header />
        <Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/addtocart" element={<CartPage />} />
          </Routes>
        </Box>
      </CartContext.Provider>
    </>
  );
}

export default App;
