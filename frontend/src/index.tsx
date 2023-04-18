import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import { RouterProvider } from 'react-router-dom';

import { Contacts } from './routes/contacts';
import { Resizer } from './routes/resizer';
import { About } from './routes/about';
import ErrorPage from './components/ErrorPage/ErrorPage';
import UploadResizeOptions from './routes/upload-resize-options';
const router = createBrowserRouter([
  {
    path:"/",
    Component:Root,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:"/contacts",
        Component: Contacts
      },
      {
        path:"/resize",
        Component:Resizer
      },
      {
        path:'/about',
        Component:About
      },
      {
        path:"/resize-options",
        Component:UploadResizeOptions
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
