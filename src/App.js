import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";               
import { store } from "./store";                      
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import RestaruantMenu from "./components/RestaurantMenu";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => (
  <div id="container">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div style={{ padding: "20px" }}>Loading page...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div style={{ padding: "20px" }}>Loading page...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div style={{ padding: "20px" }}>Loading page...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaruantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>               
    <RouterProvider router={appRouter} />
  </Provider>
);