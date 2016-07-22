/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
/*import s from './Content.css';*/
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
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
};

const title = 'React Starter Kit';


function Home({ workouts }, context) {
  return (
    <div>
      <div>
        <h1>Workout groups</h1>
        <ul> 
          {workouts.map((item, index) => (
               <GridTile
                  key={item.image}
                  title={item.title}
                  subtitle={<span>by <b>{item.author}</b></span>}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                  <img src={item.image} />
                </GridTile>
          ))}
        </ul>
      </div>
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
    tags: PropTypes.array,
    day: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default Home;
