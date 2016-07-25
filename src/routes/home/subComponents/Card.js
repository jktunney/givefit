import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = (props) => (
  <Card key={props.data.id}>
    <CardHeader
      title={props.data.author}
      avatar={props.data.avatar}
    />
    <CardMedia
      overlay={<CardTitle title={props.data.title} />}
    >
      <img src={props.data.image} />
    </CardMedia>
    <CardTitle title={props.data.location} />
    <CardText>
      {props.data.contentSnippet}
      {props.data.date}
    </CardText>
    <CardActions>
      <FlatButton label="RSVP to this workout" />
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;
