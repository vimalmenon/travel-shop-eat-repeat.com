import { Container } from '@common';
import { useFooterHelper } from '@store';

import { IFooterProps } from './Footer';
import { LowerFooter } from './LowerFooter';
import { UpperFooter } from './UpperFooter';

export const Footer: React.FC<IFooterProps> = ({ navigation }) => {
  const { versionNumber, appName } = useFooterHelper();
  return (
    <Container component="footer" flex="1" flexDirection="column">
      <UpperFooter navigation={navigation} />

      <LowerFooter appName={appName} versionNumber={versionNumber} />
    </Container>
  );
};
