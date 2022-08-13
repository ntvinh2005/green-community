import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/login/Login'
import Signup from './components/auth/signup/SignUp'
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from "./components/auth/PrivateRoute";
import CurrentUser from './components/auth/CurrentUser';
import Profile from "./components/auth/profile/Profile"
import Shop from "./components/shop/Shop";
import Market from "./components/market/Market"
import Home from './pages/home/Home';
import Task from './components/task/Task';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route exact path="/login" element={
              <CurrentUser>
                <Login />
              </CurrentUser>
            }
            ></Route>
            <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                ></Route>
            <Route exact path="/shop" element={<PrivateRoute><Shop></Shop></PrivateRoute>}></Route>
            <Route exact path="/market" element={<PrivateRoute><Market></Market></PrivateRoute>}></Route>
            <Route exact path="/" element={<Home/>}></Route>
            {/* <Route path="/shop" element = {<Shop />}></Route> */}
            <Route path="/task" element = {<PrivateRoute><Task /></PrivateRoute>}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
