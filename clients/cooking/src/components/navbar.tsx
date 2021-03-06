import React from 'react';
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { yellow, purple } from '@material-ui/core/colors';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      fontFamily: ['Raleway'].join(','),
      marginBottom: theme.spacing.unit * 13,
    },
    appBar: {
      backgroundColor: '#00D5AE',
    },
    brand: {
      position: 'absolute',
      zIndex: 1,
      minHeight: 100,
      width: 100,
      left: 75,
      top: 0,
      padding: theme.spacing.unit,
      margin: 0,
      textAlign: 'center',
      backgroundColor: purple[800],
      color: yellow[700],
      boxShadow: theme.shadows[10],
      fontFamily: ['Raleway'].join(','),
    },

    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },

    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
  });

export type NavbarProps = WithStyles<typeof styles>;
type Ref = HTMLDivElement;

const Navbar: React.FC<NavbarProps> = React.forwardRef<Ref, NavbarProps>(
  ({ classes }, ref) => {
    return (
      <div ref={ref} className={classes.root}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.brand} variant="h6">
              <span>Gosnell's Diner & Lounge</span>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
);

export default withStyles(styles)(Navbar);
