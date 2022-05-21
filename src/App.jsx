import { Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddSpent } from "./pages/AddSpent";
import { HomeUser } from "./pages/HomeUser";
import { ContextProvider } from "./context/ExpenseContext";
import { Login } from "./pages/Login";
import { Signup } from "./pages/SignUp";
import { PrivateRoute } from "./components/PrivateRoute";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";
import { PasswordReset } from "./pages/PasswordReset";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Container
          maxW="md"
          h="100%"
          backgroundImage="url(/src/wave.svg)"
          backgroundRepeat="no-repeat"
          backgroundPosition="bottom"
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomeUser />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/add"
              element={
                <PrivateRoute>
                  <AddSpent />
                </PrivateRoute>
              }
            />
          </Routes>
        </Container>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
