import { styled, useTheme } from '@mui/system';
import React from 'react';

import { ContainerProps } from './Container';
import { getSpacingValues } from './Container.service';

export const Container: React.FC<ContainerProps> = ({
  children,
  component = 'div',
  flexDirection = 'row',
  flex = '1',
  fontSize,
  sx,
  margin,
  padding,
  justifyContent,
  alignContent,
  alignItems,
  role,
  gap,
  overflow,
}) => {
  const theme = useTheme();
  const props = {
    role,
  };
  const MyContainer = React.useMemo(
    () =>
      styled(component)({
        display: 'flex',
        flexDirection,
        flex,
        fontSize,
        margin: getSpacingValues(theme, margin),
        padding: getSpacingValues(theme, padding),
        justifyContent,
        alignContent,
        alignItems,
        gap: getSpacingValues(theme, gap),
        overflow,
      }),
    [
      component,
      flexDirection,
      flex,
      fontSize,
      gap,
      sx,
      margin,
      padding,
      justifyContent,
      alignContent,
      alignItems,
      overflow,
    ]
  );
  return (
    <MyContainer sx={sx} {...props}>
      {children}
    </MyContainer>
  );
};
