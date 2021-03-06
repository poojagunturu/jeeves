import * as React from 'react';
import { withRouter } from 'react-router';
import { Theme, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import MenuItemMultiSelect from '../../components/MenuItemMultiSelect';

import Send from '@material-ui/icons/Send';

interface IFormProps {
  items: any[];
  classes: any;
  history: any;
  createItem: (context: any) => any;
  menuItems: any[];
}

interface IForm {
  name: string;
  quantity: number;
  category: string;
  logoPath: string;
  allergens: string[];
  isActive: boolean;
  menuItems: Array<{ id: string }>;
}

class Form extends React.Component<IFormProps, IForm> {
  public state: IForm = {
    name: '',
    quantity: 0,
    category: 'unknown',
    logoPath: 'http://lorempixel.com/640/480/cats',
    allergens: [],
    isActive: true,
    menuItems: [],
  };

  public handleChange = (name: keyof IForm) => (event: any) => {
    this.setState({
      [name]: event.target.value,
    } as Pick<IForm, keyof IForm>);
  };

  public handleChecked = (name: keyof IForm) => (event: any) => {
    this.setState({
      [name]: event.target.checked,
    } as Pick<IForm, keyof IForm>);
  };

  public handleMultiSelectChange = (name: keyof IForm) => (event: any) => {
    this.setState({
      [name]: event.target.value.map((value: string) => {
        return {
          id: value,
        };
      }),
    } as Pick<IForm, keyof IForm>);
  };

  public render(): JSX.Element {
    const { classes } = this.props;

    // HERE: Change
    return (
      <div>
        <div className={classes.appBarSpacer} />
        <Typography gutterBottom={true} component="h2">
          Add Inventory Item
        </Typography>
        <form
          className={classes.container}
          noValidate={true}
          autoComplete="off"
        >
          <Grid container={true} spacing={16} direction="column">
            <Grid item={true}>
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
              />
              <TextField
                id="quantity"
                label="Quantity"
                className={classes.textField}
                value={this.state.quantity}
                onChange={this.handleChange('quantity')}
              />
              <TextField
                id="category"
                label="Category"
                className={classes.textField}
                value={this.state.category}
                onChange={this.handleChange('category')}
              />
            </Grid>
            <Grid item={true}>
              <TextField
                id="logoPath"
                label="Logo Path"
                className={classes.textField}
                value={this.state.logoPath}
                onChange={this.handleChange('logoPath')}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.isActive}
                    onChange={this.handleChecked('isActive')}
                    value="isActive"
                    color="primary"
                  />
                }
                label="Is Active?"
              />
              <MenuItemMultiSelect
                value={this.state.menuItems}
                menuItems={this.props.menuItems}
                handleSelectChange={this.handleMultiSelectChange('menuItems')}
              />
            </Grid>

            <Grid item={true}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                  this.props.createItem(this.state);
                  this.props.history.goBack();
                }}
              >
                Send
                <Send className={classes.rightIcon} />
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
  },
  boxHeader: {
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  boxHeaderTitle: {
    padding: '5px 10px',
    fontSize: 35,
  },
  fillRemainingSpace: {
    flex: '1 1 auto',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '225px',
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

export default withRouter(withStyles(styles as any)(Form as any) as any) as any;
