import styles from './App.module.css';
import { ButtonSection } from './sections/ButtonSection';
import { AccordionSection } from './sections/AccordionSection';

export function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>soadtech-ui</h1>
        <p className={styles.subtitle}>Component Library Preview</p>
      </header>
      <ButtonSection />
      <AccordionSection />
    </div>
  );
}
