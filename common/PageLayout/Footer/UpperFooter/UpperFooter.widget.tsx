import { Container } from '@common';
import MiContainer from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { IUpperFooter } from './UpperFooter';

export const UpperFooter: React.FC<IUpperFooter> = ({ navigation }) => {
  return (
    <Container component="section" flex="1" fontSize="0.9em" padding={[1, 0]}>
      <MiContainer maxWidth="xl">
        <Container flex="1">
          <Container flex="1"></Container>
          <Container flex="0 0 auto">
            {navigation.map((nav, key) => {
              return (
                <Link href={nav.url} key={key}>
                  <Typography
                    marginX={0.7}
                    component={'a'}
                    sx={{
                      fontSize: '0.95em',
                      cursor: 'pointer',
                    }}
                  >
                    {nav.label}
                  </Typography>
                </Link>
              );
            })}
          </Container>
        </Container>
      </MiContainer>
    </Container>
  );
};
