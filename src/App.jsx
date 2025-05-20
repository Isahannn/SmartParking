import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Common/Layout";
import Main from "./pages/Main/Main";
import Map from "./pages/Map/Map";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import { MyProvider } from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Main />, index: true },
      { path: "/map", element: <Map /> },
      { path: "/news", element: <News /> },
      { path: "*", element: <NotFound /> },
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
