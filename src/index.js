import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Blog from './Components/HomePage/Blog';
import About from './Components/HomePage/About';
import Contact from './Components/ContactPage/Contact';
import Home from './Components/HomePage/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "blogs",
        element: <Blog/>,
        
      },
      {
        path: "contact",
        element: <Contact/>,
        
      },
      
    ],
  }
]);

root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);