import { State } from "../types/state";
import { GameDTO } from "../types/games";
import {
  PlayerDTO,
  PlayerStatAveragesDTO,
  PlayerYearResultDTO,
  RosterByYearDTO,
  SearchPlayerResultsDTO,
} from "../types/players";
import {
  TeamPersonnelDTO,
  TeamResultDTO,
  TeamStatsDTO,
} from "../types/teams";

export default {
  setCurrentPlayer(state: State, currentPlayer: PlayerDTO) {
    state.currentPlayerInfo = currentPlayer;
  },
  setCurrentPlayerStats(state: State, currentPlayerStats: PlayerYearResultDTO) {
    state.currentPlayerStats = currentPlayerStats;
  },
  setCurrentPlayerAverages(state: State, currentPlayerAverages: PlayerStatAveragesDTO) {
    state.currentPlayerStatAverages = currentPlayerAverages;
  },
  setSearchResults(state: State, searchResults: SearchPlayerResultsDTO) {
    state.searchResults = searchResults;
  },
  setPageLoading(state: State, pageLoading: boolean) {
    state.pageLoading = pageLoading;
  },
  setTeamPersonnel(state: State, teamPersonnel: TeamPersonnelDTO) {
    state.teamPersonnel = teamPersonnel;
  },
  setTeamRoster(state: State, teamRoster: RosterByYearDTO) {
    state.teamRoster = teamRoster;
  },
  setTeamResults(state: State, teamResults: TeamResultDTO) {
    state.teamResult = teamResults;
  },
  setTeamStats(state: State, teamStats: TeamStatsDTO) {
    state.teamStats = teamStats
  },
  setTeamGames(state: State, teamGames: GameDTO[]) {
    state.teamGames = teamGames;
  },
  clearCurrentData(state: State) {
    state.currentPlayerInfo = {} as PlayerDTO;
    state.currentPlayerStats = {} as PlayerYearResultDTO;
    state.currentPlayerStatAverages = {} as PlayerStatAveragesDTO;
    state.teamRoster = [] as RosterByYearDTO;
    state.teamResult = {} as TeamResultDTO;
    state.teamStats = {} as TeamStatsDTO;
    state.teamPersonnel = {} as TeamPersonnelDTO;
    state.teamGames = [] as GameDTO[];
    state.searchResults = [] as SearchPlayerResultsDTO;
    state.pageLoading = false;
  },
}