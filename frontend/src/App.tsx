import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/PageLoader";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AdminPage } from "./pages/AdminPage";
import { CallbackPage } from "./pages/CallbackPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProtectedPage } from "./pages/ProtectedPage";
import { PublicPage } from "./pages/PublicPage";

export const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={<ProtectedRoute component={ProfilePage} />}
        />
        <Route path="/public" element={<PublicPage />} />
        <Route
          path="/protected"
          element={<ProtectedRoute component={ProtectedPage} />}
        />
        <Route
          path="/admin"
          element={<ProtectedRoute component={AdminPage} />}
        />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
