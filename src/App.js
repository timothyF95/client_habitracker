// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import HabitTracker from "./pages/HabitPage";
import Todo from "./pages/TodoPage";
import Pulse from "./pages/PulsePage";
import Timer from "./pages/TimerPage";
import Profile from "./pages/ProfilePage";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/appTheme";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {

    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Clear authentication state
    setIsAuthenticated(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Router>
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={isAuthenticated ? <HomePage /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/habit" element={isAuthenticated ? <HabitTracker /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/todo" element={isAuthenticated ? <Todo /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/pulse" element={isAuthenticated ? <Pulse /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/timer" element={isAuthenticated ? <Timer /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <LoginPage onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
