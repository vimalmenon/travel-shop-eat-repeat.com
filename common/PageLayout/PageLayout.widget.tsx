import { Footer } from './Footer';
import { Header } from './Header';

export const PageLayout: React.FC = ({ children }) => {
  return (
    <main className="flex flex-col">
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
};
