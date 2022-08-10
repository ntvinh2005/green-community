import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/auth/Login'
import Signup from './components/auth/SignUp'
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/auth/PrivateRoute";
import Profile from "./components/auth/Profile"
import Shop from "./components/shop/Shop";
import Market from "./components/market/Market"

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
                exact
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              ></Route>
          <Route exact path="/shop" element={<PrivateRoute><Shop></Shop></PrivateRoute>}></Route>
          <Route exact path="/market" element={<PrivateRoute><Market></Market></PrivateRoute>}></Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
