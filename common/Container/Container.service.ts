import { GetSpacingValuesType } from './Container';

export const getSpacingValues: GetSpacingValuesType = (theme, values = []): string | undefined => {
  switch (values.length) {
    case 1:
      return theme.spacing(values[0]);
    case 2:
      return theme.spacing(values[0], values[1]);
    case 4:
      return theme.spacing(values[0], values[1], values[2], values[3]);
    default:
      return undefined;
  }
};
