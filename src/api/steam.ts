import client from 'api/client';
import { OwnedGame, PlayerSummary } from 'types/steam';
import { MY_STEAM_ID, STEAM_API_KEY } from 'constants/steam';

// Key: 5EE72E0A8F2A3C44EBB9D5C2D1648D51
// ID: 76561197998637344

// https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=5EE72E0A8F2A3C44EBB9D5C2D1648D51&steamids=76561197998637344

const getSteamUrl = (path: string, isMultipleUsers = false, hasExtraParams = false) => {
  return encodeURIComponent(
    `${path}${hasExtraParams ? '&' : '?'}key=${STEAM_API_KEY}&steamid${isMultipleUsers ? 's' : ''}=${MY_STEAM_ID}`
  );
};

export const getPlayerSummary = async (): Promise<PlayerSummary[]> => {
  return await client
    .get(getSteamUrl(`ISteamUser/GetPlayerSummaries/v0002`))
    .then(response => response?.data)
    .catch(err => console.error(err));
};

// http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=5EE72E0A8F2A3C44EBB9D5C2D1648D51&steamid=76561197998637344

export const getGetOwnedGames = async (): Promise<OwnedGame[]> => {
  return await client
    .get(getSteamUrl('IPlayerService/GetOwnedGames/v0001?include_appinfo=true', false, true))
    .then(response => response?.data.games)
    .catch(err => console.error(err));
};
