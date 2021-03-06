import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme: Theme) => ({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

interface IReviewCardProps {
  item: any;
  classes: any;
}

interface IReviewCardState {
  expanded: any;
}

class ReviewCard extends React.Component<IReviewCardProps, IReviewCardState> {
  public state = { expanded: false };

  public handleExpandClick = () => {
    this.setState((state) => ({ expanded: !state.expanded }));
  };

  public render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
          title="David Gardiner"
          subheader={`${this.props.item.score}/5.0`}
        />
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit={true}>
          <CardContent>
            <Typography paragraph={true}>Comments:</Typography>
            <Typography paragraph={true}>{this.props.item.comment}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(ReviewCard);
