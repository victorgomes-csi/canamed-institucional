import { useEffect, type JSX } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToAnchor } from './components/layout/ScrollToAnchor';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CanamedMulherPage } from './pages/CanamedMulherPage';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Cana Med — Eficiência para quem mais precisa | Gestão em Saúde',
  '/sobre-nos': 'Sobre Nós — Cana Med | Gestão em Saúde',
  '/cana-med-mulher': 'Cana Med Mulher • Eficiência e Gestão Especializada em Saúde',
};

const DEFAULT_TITLE = 'Cana Med — Eficiência para quem mais precisa | Gestão em Saúde';

export function AppRoutes(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    document.title = ROUTE_TITLES[location.pathname] || DEFAULT_TITLE;
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-surface-canvas text-graphite-text font-body-md antialiased selection:bg-mint-subtle selection:text-primary">
      <ScrollToAnchor />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nos" element={<AboutPage />} />
        <Route path="/cana-med-mulher" element={<CanamedMulherPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
