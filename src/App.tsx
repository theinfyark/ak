import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { HomePage } from '@/pages/HomePage';
import { ProductsPage } from '@/pages/ProductsPage';
import { SponsorPage } from '@/pages/SponsorPage';
import { ResumePage } from '@/pages/ResumePage';
import { useTheme } from '@/hooks/useTheme';

export default function App() {
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();
  const isResume = pathname === '/resume';

  return (
    <>
      {!isResume ? <LoadingScreen /> : null}
      <a
        href={isResume ? '#resume-content' : '#about'}
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-[#042f2e]"
      >
        Skip to content
      </a>
      {!isResume ? <Navbar theme={theme} onToggleTheme={toggle} /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isResume ? <Footer /> : null}
      {!isResume ? <ScrollToTop /> : null}
    </>
  );
}
