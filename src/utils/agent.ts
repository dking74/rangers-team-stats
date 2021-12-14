import axios from 'axios';

import config from '../config';
import { GameDTO } from '../types/games';
import {
  PlayerDTO,
  PlayerYearResultDTO,
  PlayerStatAveragesDTO,
  SearchPlayerResultsDTO,
  RosterByYearDTO,
} from '../types/players';
import { TeamPersonnelDTO, TeamResultDTO, TeamStatsDTO } from '../types/teams';

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

export const getTeamRoster = async (year: number): Promise<RosterByYearDTO> => {
  const { data } = await axios.get(`${STATS_API}/players?year=${year}`);
  return data as RosterByYearDTO;
};

export const getTeamResult = async (year: number): Promise<TeamResultDTO> => {
  const { data } = await axios.get(`${STATS_API}/teams/results?year=${year}`);
  return data as TeamResultDTO;
};

export const getTeamStats = async (year: number): Promise<TeamStatsDTO> => {
  const { data } = await axios.get(`${STATS_API}/teams/stats?year=${year}`);
  return data as TeamStatsDTO;
};

export const getTeamPersonnel = async (year: number): Promise<TeamPersonnelDTO> => {
  const { data } = await axios.get(`${STATS_API}/teams/personnel?year=${year}`);
  return data as TeamPersonnelDTO;
};

export const getTeamGames = async (year: number): Promise<GameDTO[]> => {
  const { data } = await axios.get(`${STATS_API}/games?year=${year}`);
  return data as GameDTO[];
};