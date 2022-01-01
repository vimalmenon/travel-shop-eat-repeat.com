import { Footer } from './Footer';
import { Header } from './Header';

export const PageBase: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
