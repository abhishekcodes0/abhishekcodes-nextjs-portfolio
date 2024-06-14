"use client";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  console.log("user", user);
  useEffect(() => {
    if (!user) {
      // Redirect to login if not authenticated
      router.push("/admin/login");
    }
  }, [user, router]);

  // If user is authenticated, render children
  return user ? children : null;
};

export default ProtectedRoute;
