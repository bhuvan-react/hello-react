import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import RestaruantMenu from "./components/RestaurantMenu";

const Grocery = lazy(() => import('./components/Grocery'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

// Chuncking
// Code Splitting, Dynamic Bundling / Lazy Loading or on-demand loading

const AppLayout = () => {
  return (
    <div id="container">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <Suspense fallback={<div style={{ padding: '20px' }}>Loading page...</div>}><About /></Suspense>
      },
      {
        path: '/contact',
        element: <Suspense fallback={<div style={{ padding: '20px' }}>Loading page...</div>}><Contact /></Suspense>
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<div style={{ padding: '20px' }}>Loading page...</div>}><Grocery /></Suspense>,
      },
      {
        path: '/restaurant/:resId',
        element:  <RestaruantMenu />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);
