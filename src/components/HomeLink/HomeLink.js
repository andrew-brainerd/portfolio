import React from 'react';
import { node, bool, string } from 'prop-types';
import styles from './HomeLink.module.scss';

const HomeLink = ({ children, text, path, openNewTab }) => {
  return (
    <a
      className={styles.homeLink}
      href={path}
      target={openNewTab ? '_blank' : '_self'}
    >
      {children || text || path}
    </a>
  );
};

HomeLink.propTypes = {
  children: node,
  openNewTab: bool,
  text: string,
  path: string.isRequired
};

HomeLink.defaultProps = {
  openNewTab: true
};

export default HomeLink;
