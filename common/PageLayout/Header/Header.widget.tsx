import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MiContainer from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { RootState } from '@store';
import { IMetaData } from '@types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export const Header: React.FC = () => {
  const data = useSelector<RootState, Record<string, IMetaData[]>>(
    (state) => state.app.navigationList
  );
  const router = useRouter();
  const navigation = data['MainNavigation'] || [];
  return (
    <AppBar position="static">
      <MiContainer maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div">
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navigation.map((nav, key) => (
              <Link href={nav.url} key={key}>
                <Button
                  sx={{ my: 2, color: 'white' }}
                  variant={router.route === nav.url ? 'outlined' : 'text'}
                >
                  {nav.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </MiContainer>
    </AppBar>
  );
};
