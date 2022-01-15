import { RootState, useFooterHelper } from '@store';
import { IMetaData } from '@types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export const Footer: React.FC = () => {
  const { versionNumber } = useFooterHelper();
  const data = useSelector<RootState, Record<string, IMetaData[]>>(
    (state) => state.app.navigationList
  );
  const navigation = data['FooterNavigation'] || [];
  return (
    <footer className="flex text-sm py-1 px-2 justify-between h-12 items-center">
      <span>
        {navigation.map((nav, key) => {
          return (
            <Link href={nav.url} key={key}>
              <a>{nav.name}</a>
            </Link>
          );
        })}
      </span>
      <span>{versionNumber}</span>
    </footer>
  );
};
