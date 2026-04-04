import { createRoot } from 'react-dom/client';
import '../packages/ui/src/theme/tokens.css';
import '../packages/ui/src/theme/reset.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(<App />);
