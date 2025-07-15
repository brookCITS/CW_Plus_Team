import React, { StrictMode } from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 🧩 Import the new components
import ProfileList from "./routes/Projects";
import ProfileDetails from "./routes/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProfileList />,
      },
      {
        path: "/:id",
        element: <ProfileDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

reportWebVitals();
