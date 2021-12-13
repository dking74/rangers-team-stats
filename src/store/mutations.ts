import { SearchPlayerResultsDTO } from "../types/players";
import { State } from "../types/state";

export default {
  setSearchResults(state: State, searchResults: SearchPlayerResultsDTO) {
    state.searchResults = searchResults;
  }
}