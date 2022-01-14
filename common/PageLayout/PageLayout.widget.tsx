import { Footer } from './Footer';
import { Header } from './Header';

export const PageLayout: React.FC = ({ children }) => {
  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex text-sm py-1 px-2">{children}</section>
      <Footer />
    </main>
  );
};
