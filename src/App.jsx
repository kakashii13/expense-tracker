import { Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddSpent } from "./pages/AddSpent";
import { HomeUser } from "./pages/HomeUser";
import { ContextProvider } from "./context/ExpenseContext";
import { Login } from "./pages/Login";
import { Signup } from "./pages/SignUp";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Container maxW="md" h="100%">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomeUser />
                </PrivateRoute>
              }
            />
            <Route path="/user/add" element={<AddSpent />} />
          </Routes>
        </Container>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
