import { RootState } from '@store';
import { IMetaData } from '@types';
import { useSelector } from 'react-redux';

export const Header: React.FC = () => {
  const data = useSelector<RootState, Record<string, IMetaData[]>>(
    (state) => state.app.navigationList
  );
  const navigation = data['MainNavigation'] || [];
  return (
    <header className="flex text-sm py-1 px-2">
      {navigation.map((nav, key) => {
        return <span key={key}>{nav.name}</span>;
      })}
    </header>
  );
};
