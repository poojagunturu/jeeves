import * as React from 'react';
import { Route, Switch } from 'react-router';
import Page from './Page';
import Form from './Form';

interface IIndexProps {
  match?: any;
  location?: any;
  classes?: any;
  items: any[];
  createItem: (context: any) => any;
  deleteItem: (context: any) => any;
  menuItems: any[];
}

export class Index extends React.Component<IIndexProps, {}> {
  public render(): JSX.Element {
    const Catalog = () => {
      return (
        <Page items={this.props.items} deleteItem={this.props.deleteItem} />
      );
    };

    const CreationForm = () => {
      return (
        <Form
          createItem={this.props.createItem}
          menuItems={this.props.menuItems}
        />
      );
    };

    return (
      <Switch>
        // HERE: change
        <Route path="/inventoryItems" exact={true} component={Catalog} />
        <Route path="/inventoryItems/create" component={CreationForm} />
      </Switch>
    );
  }
}
