/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './GiveFit_Logo_final_blue_red_bluetext-08.png';
import SelectFieldExampleSimple from './subComponents/filterBar'

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav} />
        <Link className={s.brand} to="/">
          <img src={logoUrl} width="38" height="38" alt="React" />
          <span className={s.brandTxt}>givefit</span>
        </Link>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>Explore free fitness</h1>
          <p className={s.bannerDesc}></p>
        {/*i think this isn't rendering because the parent component doesn't
      know what state needs to be passed to the child below "SelectFieldExampleSimple"*/}
          <SelectFieldExampleSimple />
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(Header);
