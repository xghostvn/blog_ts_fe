
import Todo from "./pages/Todo"
import Login from './pages/Auth/Login';
import Register from "./pages/Auth/Register"
import MainLayout from './layouts/Main';
import AuthLayout from './layouts/AuthLayout'
import { NotificationContext, TAppNotification } from "./Context/AppContext";
import { notification } from "antd"
import { Provider } from 'react-redux';
import store from './store';
import { Route, BrowserRouter,  Routes  } from 'react-router-dom';
import StateFull from './components/statefull';
import StateLess from './components/stateless';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import ExamplePage from './pages/Example';
import PraceticeBootstrap from "./pages/PracticeBootstrap";
let apiNotification: TAppNotification

console.log("app component")
const App = () => {
  const [api, contextHolder] = notification.useNotification()
  const query = new QueryClient()
  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  })
  apiNotification = api
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <QueryClientProvider client={query}> */}
        <PersistQueryClientProvider client={query} persistOptions={{ persister }}>
          <NotificationContext.Provider value={{ api }}>
            {contextHolder}
            <Routes>
              <Route element={<MainLayout />} >
                <Route path="todo" element={<Todo />}></Route>
                <Route path="stateless" element={<StateLess />} ></Route>
                <Route path="statefull" element={<StateFull />}></Route>
              </Route>
              <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
              </Route>

              <Route path="/example" element={<ExamplePage />}></Route>
              <Route path="/practice-bootstrap" element={<PraceticeBootstrap />}></Route>
              <Route path="/practice-bootstrap" element={<PraceticeBootstrap />}></Route>
            </Routes>
          </NotificationContext.Provider>
          <ReactQueryDevtools initialIsOpen={false} />
          {/* </QueryClientProvider> */}
        </PersistQueryClientProvider>
      </BrowserRouter>
    </Provider>
  )
}

export {
  apiNotification,
}

export default App;
