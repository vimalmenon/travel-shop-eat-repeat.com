import { Footer } from './Footer';
import { Header } from './Header';

export const PageBase: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
