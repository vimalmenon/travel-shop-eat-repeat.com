import { Container } from '@common';
import MiContainer from '@mui/material/Container';

import { ILowerFooter } from './LowerFooter';

export const LowerFooter: React.FC<ILowerFooter> = ({ appName, versionNumber }) => {
  return (
    <Container component="section" flex="1" fontSize="0.8em" padding={[1, 0]}>
      <MiContainer maxWidth="xl">
        <Container flex="1">
          <Container flex="1 1 auto">
            <span>&copy; {appName}, 2021. All rights reserved</span>
          </Container>
          <Container flex="0 0 auto">
            <span>{versionNumber}</span>
          </Container>
        </Container>
      </MiContainer>
    </Container>
  );
};
