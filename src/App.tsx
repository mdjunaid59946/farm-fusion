import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LoginForm } from './components/LoginForm';
import { Home } from './pages/Home';
import { BasicCrops } from './pages/BasicCrops';
import { CropDetail } from './components/CropDetail';
import { useUserStore } from './store/userStore';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUserStore((state) => state.user);
  if (!user) return <Navigate to="/login" />;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/basic-crops"
          element={
            <ProtectedRoute>
              <BasicCrops />
            </ProtectedRoute>
          }
        />
        <Route
          path="/crop/:id"
          element={
            <ProtectedRoute>
              <CropDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <div>About Content</div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <div>Contact Content</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;