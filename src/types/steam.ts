export interface PlayerSummary {
  steamid: string;
  communityvisibilitystate: number;
  profilestate: number;
  personaname: string;
  profileurl: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  avatarhash: string;
  lastlogoff: number;
  personastate: number;
  realname: string;
  primaryclanid: string;
  timecreated: number;
  personastateflags: number;
  loccountrycode: string;
  locstatecode: string;
  loccityid: number;
}

export interface OwnedGame {
  appid: number;
  playtime_forever: number;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
  rtime_last_played: number;
  img_icon_url: string;
  img_logo_url: string;
  name: string;
}

// appid: 3330;
// img_icon_url: '0d252b5ad580d6a8ec07dab2c8a3afb30673ae35';
// name: 'Zuma Deluxe';
// playtime_forever: 577;
// playtime_linux_forever: 0;
// playtime_mac_forever: 0;
// playtime_windows_forever: 0;
// rtime_last_played: 1489192013;
