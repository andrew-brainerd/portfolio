import React from 'react';
import HomeLink from '../HomeLink/HomeLink';
import { ReactComponent as GitHubIcon } from '../../img/github.svg';
import { ReactComponent as LinkedInIcon } from '../../img/linkedin.svg';
import { ReactComponent as EmailIcon } from '../../img/mail.svg';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.home}>
    <h1>
      {'Andrew J Brainerd'.split(' ').map((word, w) =>
        <div key={w} className={styles.word}>{word}</div>
      )}
    </h1>
    <div className={styles.links}>
      <HomeLink path={'https://github.com/andrew-brainerd'}>
        <GitHubIcon title={'My GitHub'} />
      </HomeLink>
      <HomeLink path={'https://www.linkedin.com/in/andrewbrainerd3/'}>
        <LinkedInIcon title={'My LinkedIn'} />
      </HomeLink>
      <HomeLink path={'mailto:drwb333@gmail.com'}>
        <EmailIcon title={'My Email'} />
      </HomeLink>
    </div>
  </div>
);

export default Home;
