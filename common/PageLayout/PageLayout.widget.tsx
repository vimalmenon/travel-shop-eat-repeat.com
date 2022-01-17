import { Container, MetaData } from '@common';
import MiContainer from '@mui/material/Container';

import { Footer } from './Footer';
import { Header } from './Header';
import { IPageLayoutProps } from './PageLayout';

export const PageLayout: React.FC<IPageLayoutProps> = ({
  children,
  metaData,
  navigationList,
  footerVersion,
  appName,
}) => {
  return (
    <Container component="main" flex="1" flexDirection="column">
      <Header navigation={navigationList['MainNavigation'] || []} />
      <MetaData metaData={metaData} />
      <Container component="section" flex="1" flexDirection="column">
        <MiContainer maxWidth="xl">{children}</MiContainer>
      </Container>
      <Footer
        navigation={navigationList['FooterNavigation'] || []}
        appName={appName}
        footerVersion={footerVersion}
      />
    </Container>
  );
};
