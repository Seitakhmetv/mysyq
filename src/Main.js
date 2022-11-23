import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

export default function Main() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <div>Hello world!</div>,
        },
      ]);

    return (
    <>
        <RouterProvider router={router} />
    </>
    )
}
