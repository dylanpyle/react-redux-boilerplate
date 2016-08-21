import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import logo from './logo.svg';
import style from './style.css';

export default function App(props) {
  return (
    <div>
      <section className={style.header}>
        <Link to='/'>
          <img src={logo} alt='Logo' width={100} height={100} />
        </Link>

        <h1 className={style.title}>Countries</h1>
      </section>

      <section className={style.contentContainer}>
        {props.children}
      </section>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node
};
