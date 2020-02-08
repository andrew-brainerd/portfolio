import React from 'react';
import HomeLink from '../HomeLink/HomeLink';
import { ReactComponent as GitHubIcon } from '../../img/github.svg';
import { ReactComponent as LinkedInIcon } from '../../img/linkedin.svg';
import { ReactComponent as EmailIcon } from '../../img/mail.svg';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Andrew J. Brainerd</h1>
      <div className={styles.links}>
        <HomeLink path={'https://github.com/andrew-brainerd'}>
          <GitHubIcon />
        </HomeLink>
        <HomeLink path={'https://www.linkedin.com/in/andrewbrainerd3/'}>
          <LinkedInIcon />
        </HomeLink>
        <HomeLink path={'mailto:drwb333@gmail.com'}>
          <EmailIcon />
        </HomeLink>
      </div>
    </div>
  );
};

export default Home;
