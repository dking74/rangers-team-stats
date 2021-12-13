import {
  PlayerDTO,
  PlayerYearResultDTO,
  PlayerStatAveragesDTO,
  SearchPlayerResultsDTO,
} from "../types/players"
import {
  getCurrentPlayer,
  getCurrentPlayerStats,
  getCurrentPlayerStatAverages,
  getSearchResults,
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
  }
}