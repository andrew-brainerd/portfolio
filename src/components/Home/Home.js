import React from 'react';
import HomeLink from '../HomeLink/HomeLink';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>brainerd.dev</h1>
      <h2>Andrew J. Brainerd</h2>
      <div className={styles.links}>
        <HomeLink text={'GitHub'} path={'https://github.com/andrew-brainerd'} />
      </div>
    </div>
  );
};

export default Home;
