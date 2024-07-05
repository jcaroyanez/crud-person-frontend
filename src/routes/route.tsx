import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const App = lazy(() => import('../App').then(({ App }) => ({ default: App })));
const Edit = lazy(() => import('../page/Edit').then(({ Edit }) => ({ default: Edit })));
const Add = lazy(() => import('../page/Add').then(({ Add }) => ({ default: Add })));

// eslint-disable-next-line react-refresh/only-export-components
export const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <App />,
		children: [
			{
				path: 'person/:id',
				element: <Edit />
			},
			{
				path: 'person/add',
				element: <Add />
			}
		]
  },
]);