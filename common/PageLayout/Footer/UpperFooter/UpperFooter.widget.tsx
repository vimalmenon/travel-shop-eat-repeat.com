import { Container } from '@common';
import MiContainer from '@mui/material/Container';
import Link from 'next/link';

import { IUpperFooter } from './UpperFooter';

export const UpperFooter: React.FC<IUpperFooter> = ({ navigation }) => {
  return (
    <Container component="section" flex="1" fontSize="0.9em" padding={[1.5, 0]}>
      <MiContainer maxWidth="xl">
        <div>
          <span>
            {navigation.map((nav, key) => {
              return (
                <Link href={nav.url} key={key}>
                  <a>{nav.label}</a>
                </Link>
              );
            })}
          </span>
        </div>
      </MiContainer>
    </Container>
  );
};
