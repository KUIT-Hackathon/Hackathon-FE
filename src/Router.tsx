import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import SignPage from './pages/login/SignPage';
import LoginPage from './pages/login/LoginPage';
import WritePaper from './pages/paper/WritePaper';
import CreatePublicPaper from './pages/paper/CreatePublicPaper';
import CreatePrivatePaper from './pages/paper/CreatePrivatePaper';

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
      element: <SignPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/paper/create/public',
      element: <CreatePublicPaper />,
    },
    {
      path: '/paper/create/private',
      element: <CreatePrivatePaper />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
