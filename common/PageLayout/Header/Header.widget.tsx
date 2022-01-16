import { Container } from '@common';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import MiContainer from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { RootState } from '@store';
import { IMetaData } from '@types';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export const Header: React.FC = () => {
  const data = useSelector<RootState, Record<string, IMetaData[]>>(
    (state) => state.app.navigationList
  );
  const navigation = data['MainNavigation'] || [];
  return (
    <AppBar position="static">
      <MiContainer maxWidth="xl">
        <Toolbar disableGutters>
          <Container flex="0 0 auto">
            <Link href={'/'}>
              <Typography variant="h6" noWrap component="div">
                LOGO
              </Typography>
            </Link>
          </Container>
          <Container flex="1" />
          <Container flex="0 0 auto">
            {navigation.map((nav, key) => (
              <Link href={nav.url} key={key}>
                <Button sx={{ my: 2, color: 'white' }}>{nav.label}</Button>
              </Link>
            ))}
          </Container>
        </Toolbar>
      </MiContainer>
    </AppBar>
  );
};
