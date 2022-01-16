import Button from '@mui/material/Button';
import { RootState } from '@store';
import { IMetaData } from '@types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export const Header: React.FC = () => {
  const data = useSelector<RootState, Record<string, IMetaData[]>>(
    (state) => state.app.navigationList
  );
  const navigation = data['MainNavigation'] || [];
  return (
    <header>
      {navigation.map((nav, key) => {
        return (
          <Link href={nav.url} key={key}>
            <Button variant="text">
              <a>{nav.label}</a>
            </Button>
          </Link>
        );
      })}
    </header>
  );
};
