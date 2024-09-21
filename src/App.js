import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import HabitPage from "./pages/HabitPage";
import TodoPage from "./pages/TodoPage";
import PulsePage from "./pages/PulsePage";
import TimerPage from "./pages/TimerPage";
import StreakPage from "./pages/StreakPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage"; 
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/appTheme";
import { getToken, logout } from "./services/apiService";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Router>
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/habit"
            element={isAuthenticated ? <HabitPage /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/todo"
            element={isAuthenticated ? <TodoPage /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/pulse"
            element={isAuthenticated ? <PulsePage /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/timer"
            element={isAuthenticated ? <TimerPage /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/streak"
            element={isAuthenticated ? <StreakPage /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" replace />}
          />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
