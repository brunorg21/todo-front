import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tasks } from "./pages/Tasks/Tasks";
import { Signup } from "./pages/Signup/Signup";
import { UserContextProvider } from "./context/UserContext";
import { Login } from "./pages/Login/Login";
import { PrivateRoutes } from "./routes/privateRoutes";
import { AlertProvider } from "./context/AlertContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AlertProvider>
          <UserContextProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Signup />} />
              <Route path="/home" element={<PrivateRoutes />}>
                <Route path="/home" element={<Tasks />} />
              </Route>
            </Routes>
          </UserContextProvider>
        </AlertProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
