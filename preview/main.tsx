import { createRoot } from 'react-dom/client';
import '../src/theme/tokens.css';
import '../src/theme/reset.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(<App />);
