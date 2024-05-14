import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from './Components/HomePage/Home';
import AboutPage from './Components/AboutPage/About-page'
import ContactPage from './Components/ContactPage/Contact-page';
import BlogPage from './Components/BlogPage/Blog-page';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
        element: <AboutPage/>,
      },
      {
        path: "blog",
        element: <BlogPage/>,
        
      },
      {
        path: "contact",
        element: <ContactPage/>,
        
      },
      
    ],
  }
]);

root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);