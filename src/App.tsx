import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages";
import { Header, Footer, Info, NavBar } from "./components";

function App() {
  return (
    <>
      <Header />

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
