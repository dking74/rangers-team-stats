import { GameDTO } from "../types/games";
import {
  PlayerDTO,
  PlayerYearResultDTO,
  PlayerStatAveragesDTO,
  SearchPlayerResultsDTO,
  RosterByYearDTO,
} from "../types/players"
import { TeamPersonnelDTO, TeamResultDTO, TeamStatsDTO } from "../types/teams";
import {
  getCurrentPlayer,
  getCurrentPlayerStats,
  getCurrentPlayerStatAverages,
  getSearchResults,
  getTeamRoster,
  getTeamResult,
  getTeamStats,
  getTeamPersonnel,
  getTeamGames,
} from "../utils/agent"

export default {
  //@ts-expect-error: Commit is not typed and don't want explicit type
  async getCurrentPlayer({ commit }, playerId: number): Promise<PlayerDTO> {
    return getCurrentPlayer(playerId)
      .then((data: PlayerDTO) => {
        commit('setCurrentPlayer', data);
        return data;
      })
      .catch((error: Error) => {
        console.error(`Unable to find player. ${error.message}`);
        commit('setCurrentPlayer', {});
        return {} as PlayerDTO;
      });
  },
  //@ts-expect-error: Commit is not typed and don't want explicit type
  async getCurrentPlayerStats({ commit }, playerId: number): Promise<PlayerYearResultDTO> {
    return getCurrentPlayerStats(playerId)
      .then((data: PlayerYearResultDTO) => {
        commit('setCurrentPlayerStats', data);
        return data;
      })
      .catch((error: Error) => {
        console.error(`Unable to find player stats. ${error.message}`);
        commit('setCurrentPlayerStats', {});
        return {} as PlayerYearResultDTO;
      });
  },
  //@ts-expect-error: Commit is not typed and don't want explicit type
  async getCurrentPlayerStatAverages({ commit }, playerId: number): Promise<PlayerStatAveragesDTO> {
    return getCurrentPlayerStatAverages(playerId)
      .then((data: PlayerStatAveragesDTO) => {
        commit('setCurrentPlayerAverages', data);
        return data;
      })
      .catch((error: Error) => {
        console.error(`Unable to find player stat averages. ${error.message}`);
        commit('setCurrentPlayerAverages', {});
        return {} as PlayerStatAveragesDTO;
      });
  },
  //@ts-expect-error: Commit is not typed and don't want explicit type
  async getPlayerSearchResults({ commit }, searchQuery: string): Promise<SearchPlayerResultsDTO> {
    return getSearchResults(searchQuery)
      .then((data: SearchPlayerResultsDTO) => {
        commit('setSearchResults', data);
        return data;
      })
      .catch((error: Error) => {
        console.error(`Unable to find search results. ${error.message}`);
        commit('setSearchResults', []);
        return [] as SearchPlayerResultsDTO;
      });
  },
  //@ts-expect-error: Commit is not typed and don't want explicit type
  async getTeamRoster({ commit }, year: number): Promise<RosterByYearDTO> {
    return getTeamRoster(year)
      .then((data: RosterByYearDTO) => {
        commit('setTeamRoster', data);
        return data;
      })
      .catch((error: Error) => {
        console.error(`Unable to find team roster for year ${year}. ${error.message}`);
        commit('setTeamRoster', []);
        return [] as RosterByYearDTO;
      });
  },
  //@ts-expect-error: Commit is not typed and don't want explicit type
  async getTeamPersonnel({ commit }, year: number): Promise<TeamPersonnelDTO> {
    return getTeamPersonnel(year)
      .then((data: TeamPersonnelDTO) => {
        commit('setTeamPersonnel', data);
        return data;
      })
      .catch((error: Error) => {
        console.error(`Unable to find team roster for year ${year}. ${error.message}`);
        commit('setTeamPersonnel', {});
        return {} as TeamPersonnelDTO;
      });
  },
  //@ts-expect-error: Commit is not typed and don't want explicit type
  async getTeamGames({ commit }, year: number): Promise<GameDTO[]> {
    return getTeamGames(year)
      .then((data: GameDTO[]) => {
        commit('setTeamGames', data);
        return data;
      })
      .catch((error: Error) => {
        console.error(`Unable to find team games for year ${year}. ${error.message}`);
        commit('setTeamGames', {});
        return [] as GameDTO[];
      });
  },
  //@ts-expect-error: Commit is not typed and don't want explicit type
  async getTeamResult({ commit }, year: number): Promise<TeamResultDTO> {
    return getTeamResult(year)
      .then((data: TeamResultDTO) => {
        commit('setTeamResults', data);
        return data;
      })
      .catch((error: Error) => {
        console.error(`Unable to find team results for year ${year}. ${error.message}`);
        commit('setTeamResults', {});
        return {} as TeamResultDTO;
      });
  },
  //@ts-expect-error: Commit is not typed and don't want explicit type
  async getTeamStats({ commit }, year: number): Promise<TeamStatsDTO> {
    return getTeamStats(year)
      .then((data: TeamStatsDTO) => {
        commit('setTeamStats', data);
        return data;
      })
      .catch((error: Error) => {
        console.error(`Unable to find team stats for year ${year}. ${error.message}`);
        commit('setTeamStats', {});
        return {} as TeamStatsDTO;
      });
  },
}