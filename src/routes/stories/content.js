import React from 'react';
import { storiesOf, action } from '@kadira/storybook'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import Home from '../content/Content'

storiesOf('Home', module) 
	.addDecorator(story => (
		<MuiThemeProvider muiTheme={getMuiTheme()}>
      		{story()}
    	</MuiThemeProvider>
		))
	.add('some workouts', () => {
		const workoutItems = [
			{"title":"gravida sem praesent","date":"10/16/2016","time":"11:00 AM","location":"2721 Dorton Way","author":"Frank Smith","contentSnippet":"vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut","tags":[{},{},{}],"day":"rutrum","image":"http://dummyimage.com/133x240.png/ff4444/ffffff"},
			{"title":"cubilia curae donec","date":"7/31/2016","time":"3:46 AM","location":"46293 Bartillon Trail","author":"Diane Barnes","contentSnippet":"sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue","tags":[{},{},{},{},{}],"day":"quis","image":"http://dummyimage.com/225x249.png/dddddd/000000"},
		];

		return getWorkouts(workoutItems);
	});

function getWorkouts(workouts){
	return (
		
			<Home workouts={workouts} />
		
	)
}

const grid = {
	root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
}