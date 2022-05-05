import { Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddAmount } from "./pages/AddAmount";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:add" element={<AddAmount />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
