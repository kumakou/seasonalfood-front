import React from "react"
import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import RestaurantDetailPage from "./RestaurantDetailPage"

const router = createBrowserRouter([
  {
    basename: process.env.PUBLIC_URL,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/restaurants",
        children: [{ path: ":id", element: <RestaurantDetailPage /> }],
      },
    ],
  },
])

export default router
