import { ThemeToggle } from './components/ui/ThemeToggle';
import { ThemeProvider } from './context';

const BeautySoftApp = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <ThemeToggle />
      </div>
      <h1>Hola</h1>
    </ThemeProvider>
  );
};

export default BeautySoftApp;
