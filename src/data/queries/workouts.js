import * as _ from 'underscore';

import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';

import NewsItemType from '../types/NewsItemType';
import WorkoutType from '../types/WorkoutType';
import WorkoutList from './fakeData/workoutData';

// React.js News Feed (RSS)

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const workouts = {
  type: new List(WorkoutType),
  resolve: function(source) {
  		return WorkoutList;
  	}
};

export default workouts;