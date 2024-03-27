  import React from "react";
  import "./index.css";
  import ReactDOM from "react-dom/client";
  import reportWebVitals from "./reportWebVitals";
  import { RouterProvider, createBrowserRouter } from "react-router-dom";
  import SignIn from "./pages/signin/SignIn";

  const root = ReactDOM.createRoot(document.getElementById("root"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
  ]);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  reportWebVitals();
