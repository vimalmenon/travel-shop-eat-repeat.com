import { Theme } from '@mui';
import type Paper from '@mui/material/Paper';
import { SxProps } from '@mui/system';

export type ContentType =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'start'
  | 'left'
  | 'normal'
  | 'right';
export interface ContainerProps {
  component?: 'main' | 'div' | 'section' | 'header' | 'footer' | 'aside' | Paper;
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  justifyContent?: ContentType;
  alignContent?: ContentType;
  alignItems?: ContentType;
  flex?: string;
  sx?: SxProps<Theme>;
  fontSize?: string;
  margin?: number[];
  padding?: number[];
  role?: string;
  gap?: number[];
  overflow?: string;
  elevation?: number;
}

export type GetSpacingValuesType = (
  theme: Theme,
  values: number[] | undefined
) => string | undefined;
