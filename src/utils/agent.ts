import axios from 'axios';

import config from '../config';
import {
  PlayerDTO,
  PlayerYearResultDTO,
  PlayerStatAveragesDTO,
  SearchPlayerResultsDTO,
} from '../types/players';

const STATS_API = config.statsApi;

export const getCurrentPlayer = async (playerId: number): Promise<PlayerDTO> => {
  const { data } = await axios.get(`${STATS_API}/players/${playerId}`);
  return data as PlayerDTO;
};

export const getCurrentPlayerStats = async (playerId: number): Promise<PlayerYearResultDTO> => {
  const { data } = await axios.get(`${STATS_API}/players/${playerId}/results`);
  return data as PlayerYearResultDTO;
};

export const getCurrentPlayerStatAverages = async (playerId: number): Promise<PlayerStatAveragesDTO> => {
  const { data } = await axios.get(`${STATS_API}/players/${playerId}/results/averages`);
  return data as PlayerStatAveragesDTO;
};

export const getSearchResults = async (searchQuery: string): Promise<SearchPlayerResultsDTO> => {
  const { data } = await axios.get(`${STATS_API}/players/search?q=${searchQuery}`);
  return data as SearchPlayerResultsDTO;
};