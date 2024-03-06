import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages";
import { Header, Footer, Info, NavBar } from "./components";
//import Categories from './assets/Categories.json'

function App() {
  return (
    <>
      <Header />
      {/* The header is fixed, meaning other elements will still be under it. We have to give top space for all of them to be shown */}
      <Box pt="4rem">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>

      <Info />
      <Footer />
    </>
  );
}

export default App;
