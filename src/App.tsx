import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LoginForm } from './components/LoginForm';
import { Home } from './pages/Home';
import { BasicCrops } from './pages/BasicCrops';
import { CropDetail } from './components/CropDetail';
import { About } from './pages/about';
import { Contact } from './pages/Contact';
import { useUserStore } from './store/userStore';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUserStore((state) => state.user);
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  const appStyle: React.CSSProperties = {
    backgroundImage: `url('WhatsApp Image 2024-12-05 at 08.11.16_72af5d17.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    margin: 0,
  };

  return (
    <div style={appStyle}>
      <Router>
        <Navbar />
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
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
