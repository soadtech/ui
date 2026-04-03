import styles from './App.module.css';
import { ButtonSection } from './sections/ButtonSection';
import { AccordionSection } from './sections/AccordionSection';
import { ActionBarSection } from './sections/ActionBarSection';
import { AlertSection } from './sections/AlertSection';
import { AvatarSection } from './sections/AvatarSection';
import { BadgeSection } from './sections/BadgeSection';
import { BreadcrumbsSection } from './sections/BreadcrumbsSection';
import { ButtonLinkSection } from './sections/ButtonLinkSection';
import { CalendarSection } from './sections/CalendarSection';
import { CheckboxSection } from './sections/CheckboxSection';
import { CardSection } from './sections/CardSection';
import { ChartSection } from './sections/ChartSection';
import { ChipSection } from './sections/ChipSection';
import { DatepickerSection } from './sections/DatepickerSection';
import { DialogSection } from './sections/DialogSection';
import { DividerSection } from './sections/DividerSection';
import { DropdownMenuSection } from './sections/DropdownMenuSection';
import { FileUploadSection } from './sections/FileUploadSection';
import { InputCounterSection } from './sections/InputCounterSection';
import { InputMessageSection } from './sections/InputMessageSection';
import { InputSearchSection } from './sections/InputSearchSection';
import { InputTextSection } from './sections/InputTextSection';
import { InputTextAreaSection } from './sections/InputTextAreaSection';
import { NavbarUserSection } from './sections/NavbarUserSection';
import { NotificationSection } from './sections/NotificationSection';
import { PaginationSection } from './sections/PaginationSection';

export function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>soadtech-ui</h1>
        <p className={styles.subtitle}>Component Library Preview</p>
      </header>
      <ButtonSection />
      <ButtonLinkSection />
      <AccordionSection />
      <ActionBarSection />
      <AlertSection />
      <AvatarSection />
      <BadgeSection />
      <BreadcrumbsSection />
      <CalendarSection />
      <CardSection />
      <CheckboxSection />
      <ChartSection />
      <ChipSection />
      <DatepickerSection />
      <DialogSection />
      <DividerSection />
      <DropdownMenuSection />
      <FileUploadSection />
      <InputCounterSection />
      <InputMessageSection />
      <InputSearchSection />
      <InputTextSection />
      <InputTextAreaSection />
      <NavbarUserSection />
      <NotificationSection />
      <PaginationSection />
    </div>
  );
}
