import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
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
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
