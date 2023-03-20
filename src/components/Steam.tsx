import { useEffect, useState } from 'react';
import { getGetOwnedGames, getPlayerSummary } from 'api/steam';
import { OwnedGame } from 'types/steam';

import styles from 'styles/components/Steam.module.scss';

const buildImageUrl = (appId: number, hash: string) => `http://media.steampowered.com/steamcommunity/public/images/apps/${appId}/${hash}.jpg`;

const Game = ({ appid, name, img_logo_url, img_icon_url }: OwnedGame) => (
  <div key={appid} className={styles.game}>
    <div><img src={buildImageUrl(appid, img_logo_url || img_icon_url)} /></div>
    <div>{name}</div>
  </div>
);

const Steam = () => {
  const [games, setGames] = useState([] as OwnedGame[]);

  useEffect(() => {
    getPlayerSummary().then(playerSummary => {
      console.log('Player Summary', playerSummary);
    });

    getGetOwnedGames().then(ownedGames => {
      console.log('Owned Games', ownedGames);
      setGames(ownedGames);
    });
  }, []);

  return (
    <div>
      {games
        .sort((a, b) => b.rtime_last_played - a.rtime_last_played)
        .filter(game => game.playtime_forever > 0)
        .map(game => <Game {...game} />)}
    </div>
  );
};

export default Steam;
