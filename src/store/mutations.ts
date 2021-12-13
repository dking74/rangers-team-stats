import { GameDTO } from "../types/games";
import { PlayerDTO, PlayerStatAveragesDTO, PlayerYearResultDTO, RosterByYearDTO, SearchPlayerResultsDTO } from "../types/players";
import { State } from "../types/state";
import { TeamPersonnelDTO, TeamResultDTO, TeamStatsDTO } from "../types/teams";

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