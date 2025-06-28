import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import SignPage from './pages/login/SignPage';
import LoginPage from './pages/login/LoginPage';
import WritePaper from './pages/pager/WritePaper';


const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/paper/write',
      element: <WritePaper />,
    },
    {
      path: '/signin',
      element:<SignPage/>
    },
    {
      path: '/login',
      element:<LoginPage/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
