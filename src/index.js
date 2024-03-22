import React from "react"
import "./index.css"
import router from "./AppRoutes"
import reportWebVitals from "./reportWebVitals"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<RouterProvider router={router} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
