import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import {
  AddToCartPage,
  HomePage,
  AboutPage,
  SignInPage,
  SignUpPage,
} from "./pages";

function App() {
  return (
    <>
      <Header cartCount={0} />
      <Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/addtocart" element={<AddToCartPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
