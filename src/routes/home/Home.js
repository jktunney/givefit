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
import s from './Home.css';

const title = 'React Starter Kit';

function Home({ news }, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
          <h1 className={s.title}>Free Fitness Activities in Baltimore</h1>
            <normal className="text">Have fun attending these free group fitness classes throughout our lovely city.</normal>       
              {/*Tockify addin*/}
              <div data-tockify-maxEvents="8"
              data-tockify-component="calendar" data-tockify-calendar="jakecalendar"></div>
              <script data-tockify-script="embed" 
              src="https://public.tockify.com/browser/embed.js"></script>
      </div>
    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
