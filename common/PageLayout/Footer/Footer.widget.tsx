import { RootState, useFooterHelper } from '@store';
import { IMetaData } from '@types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export const Footer: React.FC = () => {
  const { versionNumber, appName } = useFooterHelper();
  const data = useSelector<RootState, Record<string, IMetaData[]>>(
    (state) => state.app.navigationList
  );
  const navigation = data['FooterNavigation'] || [];
  return (
    <footer>
      <div>
        <span>
          {navigation.map((nav, key) => {
            return (
              <Link href={nav.url} key={key}>
                <a>{nav.name}</a>
              </Link>
            );
          })}
        </span>
      </div>
      <div>
        <span>&copy; {appName}, 2021. All rights reserved</span>
        <span>{versionNumber}</span>
      </div>
    </footer>
  );
};
