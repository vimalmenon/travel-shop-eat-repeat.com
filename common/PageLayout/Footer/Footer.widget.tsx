import { Container } from '@common';
import Button from '@mui/material/Button';
import { RootState, useFooterHelper } from '@store';
import { IMetaData } from '@types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { LowerFooter } from './LowerFooter';

export const Footer: React.FC = () => {
  const { versionNumber, appName } = useFooterHelper();
  const data = useSelector<RootState, Record<string, IMetaData[]>>(
    (state) => state.app.navigationList
  );
  const navigation = data['FooterNavigation'] || [];
  return (
    <Container component="footer" flex="1" flexDirection="column">
      <div>
        <span>
          {navigation.map((nav, key) => {
            return (
              <Link href={nav.url} key={key}>
                <Button variant="text">
                  <a>{nav.label}</a>
                </Button>
              </Link>
            );
          })}
        </span>
      </div>
      <LowerFooter appName={appName} versionNumber={versionNumber} />
    </Container>
  );
};
