import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/auth/PrivateRoute';
import Profile from './components/auth/Profile';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Task from './pages/task/Task';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/dangky" element={<SignUp />}></Route>
            <Route path="/dangnhap" element={<Login />}></Route>
            <Route path="/cuahang" element = {<Shop />}></Route>
            <Route path="/nhiemvu" element = {<Task />}></Route>
            <Route
              exact
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
