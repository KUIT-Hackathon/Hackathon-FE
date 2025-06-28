import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import SignPage from './pages/login/SignPage';
import LoginPage from './pages/login/LoginPage';
import WritePaper from './pages/paper/WritePaper';
import CreatePublicPaper from './pages/paper/CreatePublicPaper';
import CreatePrivatePaper from './pages/paper/CreatePrivatePaper';
import AlarmPage from './pages/alarm/AlarmPage';
import MyPageMain from './pages/myPage/myPageMain';
import FollowingPage from './pages/myPage/followingPage';
import FollowerPage from './pages/myPage/followerPage';
import FindFriendPage from './pages/myPage/findFriendPage';
import OpenedPage from './pages/open/OpenedPage';
import PublicMain from './pages/publicPaper/publicMain';
import WritePublic from './pages/publicPaper/writePublic';
import MessageDetail from './pages/paper/MessageDetail';
import PaperList from './pages/paper/PaperList';


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
      path: '/paper/open',
      element: <OpenedPage />,
    },
    {
      path: '/paper/create/public',
      element: <CreatePublicPaper />,
    },
    {
      path: '/paper/create/private',
      element: <CreatePrivatePaper />,
    },
    {
      path: '/alarm',
      element: <AlarmPage />,
    },
    {
      path: '/paper/list',
      element: <PaperList />,
    },
    {
      path: '/paper/detail',
      element: <MessageDetail />,
    },
    {
      path: '/mypage',
      element: <MyPageMain name={'김도현'} mypaper={'12'} follower={'12'} following={'24'} />,
    },
    {
      path: '/mypage/following',
      element: <FollowingPage />,
    },
    {
      path: '/mypage/follower',
      element: <FollowerPage />,
    },
    {
      path: '/mypage/findfriend',
      element: <FindFriendPage />,
    },
    {
      path: '/public/main',
      element: <PublicMain />,
    },
    {
      path: '/public/write',
      element: <WritePublic />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
