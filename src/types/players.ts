import {
  BatYearResultDTO,
  PitchYearResultDTO,
} from './default';
  
export interface PlayerDetail {
  age: number,
  dob: string,
  country: string,
  position: string,
  bats: string,
  throws: string,
  height: string,
  weight: number,
  years: number,
}
export interface PlayerDTO extends PlayerDetail {
  player_id: number;
  first_name: string,
  last_name: string,
  logo: string,
}

export interface RosterDTO {
  year: number,
  player: PlayerDTO,
}

export interface PlayerBatYearResultDTO extends BatYearResultDTO {}
export interface PlayerPitchYearResultDTO extends PitchYearResultDTO {}
export interface PlayerYearResult {
  batting: PlayerBatYearResultDTO;
  pitching: PlayerPitchYearResultDTO;
}
export interface PlayerYearResultDTO {
  [year: number]: PlayerYearResult;
}
  
export interface PlayerStatAveragesDTO {
  batting: PlayerBatYearResultDTO;
  pitching: PlayerPitchYearResultDTO;
}

export type RosterByYearDTO = PlayerDTO[];

export interface SearchPlayerDTO {
  player_id: number;
  name: string;
}
export type SearchPlayerResultsDTO = SearchPlayerDTO[];