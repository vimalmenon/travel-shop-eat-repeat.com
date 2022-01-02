import { Footer } from './Footer';
import { Header } from './Header';

export const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
