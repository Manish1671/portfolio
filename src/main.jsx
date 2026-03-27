import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import AOS from "aos"
import "aos/dist/aos.css"

// Initialise AOS once globally — prevents duplicate calls across components
AOS.init({
  once: true,
  offset: 10,
  duration: 700,
  easing: "ease-out-quad",
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
