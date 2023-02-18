import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Main, Details } from "./components";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />} />
      <Route path="player/:id" element={<Details />} />
    </>
  )
);

root.render(<RouterProvider router={router} />);
