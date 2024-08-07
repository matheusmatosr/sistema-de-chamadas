import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import AuthProvider from './contexts/auth';
import Profile from './pages/Profile';
import Client from './pages/Clients';
import New from './pages/New';
import Edit from './pages/Edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/register',
    element: <SignUp />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/costumers',
    element: <Client />
  },
  {
    path: '/new',
    element: <New />
  },
  {
    path: '/edit',
    element: <Edit />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <React.StrictMode>
      <ToastContainer autoClose={1000} />
      <RouterProvider router={router}/>
    </React.StrictMode>
  </AuthProvider>
);
