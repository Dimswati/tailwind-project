import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages';
import Projects from './pages/projects';
import Project from './pages/project';
import MainLayout from './components/MainLayout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'projects',
          element: <Projects/>
        },
        {
          path: 'projects/:projectId',
          element: <Project/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
