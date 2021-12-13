import axios from 'axios';

import config from '../config';
import { SearchPlayerResultsDTO } from '../types/players';

const STATS_API = config.statsApi;

export const getSearchResults = async (searchQuery: string): Promise<SearchPlayerResultsDTO> => {
  const { data } = await axios.get(`${STATS_API}/players/search?q=${searchQuery}`);
  return data as SearchPlayerResultsDTO;
};