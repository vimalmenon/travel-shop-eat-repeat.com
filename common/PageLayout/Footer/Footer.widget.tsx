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
    <footer>
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
