import {
  PlayerDTO,
  PlayerStatAveragesDTO,
  PlayerYearResultDTO,
  RosterByYearDTO,
  SearchPlayerResultsDTO,
} from '../types/players';
import {
  TeamPersonnelDTO,
  TeamResultDTO,
  TeamStatsDTO,
} from '../types/teams';
import { GameDTO } from '../types/games';
import { State } from '../types/state';

const state: State = {
  currentPlayerInfo: {} as PlayerDTO,
  currentPlayerStats: {} as PlayerYearResultDTO,
  currentPlayerStatAverages: {} as PlayerStatAveragesDTO,
  teamRoster: [] as RosterByYearDTO,
  teamResult: {} as TeamResultDTO,
  teamStats: {} as TeamStatsDTO,
  teamPersonnel: {} as TeamPersonnelDTO,
  teamGames: [] as GameDTO[],
  searchResults: [] as SearchPlayerResultsDTO,
  pageLoading: false as boolean,
}

export default state;