import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './HomeLink.module.scss';

const HomeLink = ({ text, path }) => {
  return (
    <Link className={styles.homeLink} to={path}>
      {text || path}
    </Link>
  );
};

HomeLink.propTypes = {
  text: string,
  path: string.isRequired
};

export default HomeLink;
