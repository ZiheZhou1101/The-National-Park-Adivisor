import React, { useEffect } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import NavBar from './routes/NavBar';
import HomePage from './routes/HomePage';
import ListPage from './routes/ListPage';
import DetailPage from './routes/DetailsPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllParks } from './redux/parkSlice';
import Spinner from './components/Spinner';
import styled from 'styled-components';

const StyledSpinner = styled.div`
display:flex;
height: 100vh;
justify-content: center;
align-items: center;
`

const router = createHashRouter([
  {
    path: '',
    element: <NavBar />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'ListPage',
        element: <ListPage />,
      },
      {
        path: 'ListPage/:id',
        element: <DetailPage />,
      },
    ],
  },
]);
const App = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.park.status)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllParks());
    }
  }, [status, dispatch]);
  let content;
  if (status === 'loading') {
    content = <div><StyledSpinner><Spinner /></StyledSpinner></div>;
  } else if (status === 'succeeded') {
    content = <RouterProvider router={router} />;
  } else if (status === 'failed') {
    content = <div>Error</div>
  }

  return (
    <div>
      {content}
    </div>);
};

export default App;