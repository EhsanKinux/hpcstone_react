import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Products from "./pages/products/Products.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import Bazalt from "./pages/products/categories/bazalt.jsx";
import Granite from "./pages/products/categories/granite.jsx";
import Marble from "./pages/products/categories/marble.jsx";
import Porslain from "./pages/products/categories/porslain.jsx";
import Travertin from "./pages/products/categories/travertin.jsx";
import Travenix from "./pages/products/categories/travenix.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products />,
    children: [
      {
        path: "bazalt",
        element: <Bazalt />,
      },
      {
        path: "granite",
        element: <Granite />,
      },
      {
        path: "marble",
        element: <Marble />,
      },
      {
        path: "porslain",
        element: <Porslain />,
      },
      {
        path: "travertin",
        element: <Travertin />,
      },
      {
        path: "travenix",
        element: <Travenix />,
      },
    ],
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
