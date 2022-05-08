import { Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddSpent } from "./pages/AddSpent";
import { Home } from "./pages/Home";
import { ContextProvider } from "./context/ExpenseContext";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Container maxW="md" h="100%">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:add" element={<AddSpent />} />
          </Routes>
        </Container>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
