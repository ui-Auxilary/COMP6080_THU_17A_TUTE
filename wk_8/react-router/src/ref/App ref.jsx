import './App.css'
import PageOne from './pages ref/PageOne'
import PageTwo from './pages ref/PageTwo'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router'
import PageThree from './pages ref/PageThree'

function App() {
  const router = createBrowserRouter([
    {
      'path': '/page1',
      element: <PageOne />
    },
    {
      'path': 'page2',
      element: <PageTwo />
    },
    {
      'path': 'page3',
      element: <PageThree />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App
