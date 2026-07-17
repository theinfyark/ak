import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { yearsOfExperienceLabel } from './lib/utils';
import './index.css';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element #root not found');
}

const yearsLabel = yearsOfExperienceLabel();
const twitterDesc = document.querySelector('meta[name="twitter:description"]');
if (twitterDesc) {
  twitterDesc.setAttribute(
    'content',
    `Backend · Cloud · DevOps · GenAI · Open Source — ${yearsLabel} years of engineering experience.`,
  );
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
