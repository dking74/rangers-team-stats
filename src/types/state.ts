import {
  PlayerDTO,
  RosterByYearDTO,
  PlayerYearResultDTO,
  PlayerStatAveragesDTO,
  SearchPlayerResultsDTO,
} from './players';
import {
  TeamPersonnelDTO,
  TeamStatsDTO,
  TeamResultDTO,
} from './teams';
import { GameDTO } from './games';

export interface State {
  // Player state
  currentPlayerInfo: PlayerDTO;
  currentPlayerStats: PlayerYearResultDTO;
  currentPlayerStatAverages: PlayerStatAveragesDTO;
  // Team state
  teamRoster: RosterByYearDTO;
  teamResult: TeamResultDTO;
  teamStats: TeamStatsDTO;
  teamPersonnel: TeamPersonnelDTO;
  teamGames: GameDTO[];
  // Search results
  searchResults: SearchPlayerResultsDTO;
}