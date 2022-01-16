import { Container } from '@common';
import { RootState, useFooterHelper } from '@store';
import { IMetaData } from '@types';
import { useSelector } from 'react-redux';

import { LowerFooter } from './LowerFooter';
import { UpperFooter } from './UpperFooter';

export const Footer: React.FC = () => {
  const { versionNumber, appName } = useFooterHelper();
  const data = useSelector<RootState, Record<string, IMetaData[]>>(
    (state) => state.app.navigationList
  );
  const navigation = data['FooterNavigation'] || [];
  return (
    <Container component="footer" flex="1" flexDirection="column">
      <UpperFooter navigation={navigation} />

      <LowerFooter appName={appName} versionNumber={versionNumber} />
    </Container>
  );
};
