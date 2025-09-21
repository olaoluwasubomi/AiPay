// src/routes/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, bootstrapped } = useAuth();
  if (!bootstrapped) return null;
  if (!user) return <Navigate to="/Login" replace />;
  return children;
}
