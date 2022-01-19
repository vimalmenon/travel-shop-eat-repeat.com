import { Container } from '@common';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';

import { ISidePanel } from './SidePanel';

export const SidePanel: React.FC<ISidePanel> = ({ categories, tags }) => {
  return (
    <Container component={'aside'} flex="0 0 300px" flexDirection="column">
      <Container
        component={Paper}
        elevation={3}
        flexDirection="column"
        flex="0"
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
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label={tag.value}
                          />
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
    </Container>
  );
};
