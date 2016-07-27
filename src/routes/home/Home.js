/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MainFeed from './subComponents/MainFeed';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 600,
    height: 1200,
    cols: 1,
    padding: 10,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

function Home({ workouts }, context) {
  return (
      <div>  
        <ul>
          {workouts.map((item, index) => (
               <MainFeed 
                  key={index}
                  data={item}
               />
          ))}
        </ul>
      </div>
        
  );
}

Home.propTypes = {
  workouts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    time: PropTypes.string.isRequired,
    location: PropTypes.string,
    author: PropTypes.string,
    contentSnippet: PropTypes.string,
    tags: PropTypes.string,
    day: PropTypes.string,
    image: PropTypes.string,
    avatar: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
};

export default Home;
