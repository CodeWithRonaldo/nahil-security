import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import About from "./pages/About/About.jsx";
import LogisticServices from "./pages/LogisticServices/LogisticServices.jsx";
import SecurityServices from "./pages/SecurityServices/SecurityServices.jsx";
import Appointment from "./pages/Appointment/Appointment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "logistic-services",
        element: <LogisticServices />,
      },
      {
        path: 'security-services',
        element: <SecurityServices/>
      },
      {
        path:'appointment', element: <Appointment/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
