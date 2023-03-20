import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ROOT_ROUTE, STEAM_ROUTE } from 'constants/routes';
import App from 'components/App';
import Steam from 'components/Steam';

import 'styles/index.scss';

const router = createBrowserRouter([
  {
    path: ROOT_ROUTE,
    element: <App />,
    // errorElement: <Navigate to={ROOT_ROUTE} />,
    children: [
      {
        path: STEAM_ROUTE,
        element: <Steam />
      }
    ]
  }
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<RouterProvider router={router} />);
