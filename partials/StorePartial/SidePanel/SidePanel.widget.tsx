import { Container } from '@common';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

import { ISidePanel } from './SidePanel';

export const SidePanel: React.FC<ISidePanel> = ({ categories, tags }) => {
  return (
    <Container
      component="aside"
      flex="0 0 300px"
      sx={{ border: '1px solid gray' }}
      flexDirection="column"
      padding={[1]}
      margin={[1]}
    >
      {categories.map((category, key) => {
        return (
          <Container key={key} flexDirection="column">
            <Button variant="outlined" fullWidth={true}>
              {category.value}
            </Button>
            <Container key={key} flexDirection="column" margin={[0, 2]}>
              <FormGroup>
                {tags.map((tag, innerKey) => {
                  if (tag.category.name === category.name) {
                    return (
                      <Container flex="1" key={innerKey}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label={tag.value} />
                      </Container>
                    );
                  }
                })}
              </FormGroup>
            </Container>
          </Container>
        );
      })}
    </Container>
  );
};
