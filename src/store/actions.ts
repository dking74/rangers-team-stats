import { SearchPlayerResultsDTO } from "../types/players"
import { getSearchResults } from "../utils/agent"

export default {
  //@ts-expect-error: Commit is not typed and don't want explicit type
  async getPlayerSearchResults({ commit }, searchQuery: string): Promise<SearchPlayerResultsDTO> {
    return getSearchResults(searchQuery)
      .then((data: SearchPlayerResultsDTO) => {
        commit('setSearchResults', data);
        return data;
      })
      .catch((error: Error) => {
        console.error(`Unable to find search results. ${error.message}`);
        commit('setSearchResults', [])
        return [];
      })
  }   
}