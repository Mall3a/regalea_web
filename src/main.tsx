import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { queryClient } from "./lib/queryClient";

import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import AppLayout from "./layouts/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import RequireRole from "./components/RequireRole";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "user", element: <UserPage /> },

      {
        path: "admin",
        element: <RequireRole role="ADMIN" />,
        children: [
          { path: "users", element: <div>Gestión de usuarios</div> },
          { path: "logs", element: <div>Logs</div> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
