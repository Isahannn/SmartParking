import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Сommon/Layout";
import Main from "./Pages/Main/Main";
import Map from "./Pages/Map/Map";
import News from "./Pages/News/News";


import NotFound from "./Pages/NotFound/NotFound";
import { MyProvider } from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
        index: true,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return (
    <MyProvider>
      <RouterProvider router={router} />
    </MyProvider>
  );
}
