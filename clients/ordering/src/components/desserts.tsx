import React from 'react';
import { Theme, createStyles, WithStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MenuCard from './card';
import menucards from './menucards';

const styles = (theme: Theme) => createStyles({});

type Props = WithStyles<typeof styles>;

const Desserts: React.FC<Props> = ({ classes }) => {
  const desserts = menucards.filter((f) => f.category === 'dessert');

  return (
    <div>
      <Typography variant="h4" gutterBottom={true} component="h2">
        Desserts
      </Typography>
      <Grid
        container={true}
        spacing={32}
        alignItems={'center'}
        justify={'space-evenly'}
      >
        {desserts.map((menucard) => (
          <MenuCard key={menucard.id} {...menucard} />
        ))}
      </Grid>
    </div>
  );
};

export default Desserts;
