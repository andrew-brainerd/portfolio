import { useEffect, useState } from 'react';
import { getGetOwnedGames, getPlayerSummary } from 'api/steam';
import { OwnedGame } from 'types/steam';

import styles from 'styles/components/Steam.module.scss';

const buildImageUrl = (appId: number, hash: string) =>
  `http://media.steampowered.com/steamcommunity/public/images/apps/${appId}/${hash}.jpg`;

const Game = ({ appid, name, img_logo_url, img_icon_url, playtime_forever, rtime_last_played }: OwnedGame) => (
  <div key={appid} className={styles.game}>
    <div>
      <img src={buildImageUrl(appid, img_logo_url || img_icon_url)} />
    </div>
    <div>{name}</div>
    {/* <div>{Math.round(playtime_forever / 60)}</div> */}
    {/* <div>{rtime_last_played > 1676768400 ? 'PLAYED RECENTLY' : ''}</div> */}
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
        // .sort((a, b) => b.rtime_last_played - a.rtime_last_played)
        // .sort((a, b) => b.playtime_forever - a.playtime_forever)
        .sort((a, b) => b.playtime_forever - a.playtime_forever)
        .filter(game => Math.round(game.playtime_forever / 60) > 10)
        .filter(game => game.rtime_last_played > 1676768400)
        .map(game => <Game {...game} />)
        .slice(0, 10)
      }
    </div>
  );
};

export default Steam;
