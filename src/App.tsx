import React from 'react';
import Todo from "./pages/Todo"
import Login from './pages/Auth/Login';
import Register from "./pages/Auth/Register"
import MainLayout from './layouts/Main';
import AuthLayout from './layouts/AuthLayout'
import { NotificationContext, TAppNotification } from "./Context/AppContext";
import { notification } from "antd"
import { Provider } from 'react-redux';
import store from './store';
import { Route, BrowserRouter, Link, Router, Routes, useNavigate } from 'react-router-dom';
import StateFull from './components/statefull';
import StateLess from './components/stateless';
import AuthMiddleware from './middleware/AuthMiddleware';
let apiNotification: TAppNotification

const App = () => {
  const [api, contextHolder] = notification.useNotification()
  apiNotification = api
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NotificationContext.Provider value={{ api }}>
          {contextHolder}
          <Routes>
            <Route element={<MainLayout />} >
              <Route path="todo" element={<Todo />} loader={AuthMiddleware}></Route>
              <Route path="stateless" element={<StateLess />} ></Route>
              <Route path="statefull" element={<StateFull />}></Route>
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
            </Route>
          </Routes>
        </NotificationContext.Provider>
      </BrowserRouter>
    </Provider>
  )
}

export {
  apiNotification,
}

export default App;
